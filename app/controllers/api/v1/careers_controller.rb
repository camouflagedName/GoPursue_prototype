class Api::V1::CareersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    career = Career.all.order(created_at: :asc)
    render json: career
  end

  def get_random_hashtag
    career = Career.all
    #all_hashtags = Career.all(:select => "hashtag")
    random_career = career.sample.to_json
    random_career_json = JSON.parse(random_career)
    hashtag = random_career_json["hashtag"].sample.to_str
    #random_career_hashtag_data = random_career_string["hashtag"].sample
    #render json: random_career_hashtag_data
    puts hashtag
    render plain: hashtag
  end

  #find only careers that match a bookmarked array
  def get_bookmarked_careers
    bookmarks = params[:bookmark_array]
    if bookmarks
      bookmarked_careers = Career.where(id: bookmarks)
      render json: bookmarked_careers
    end
  end

  def random_career
    @career = Career.all
    render json: @career.sample
  end

  def show
    if career
      render json: career
    else
      render json: career.errors    
    end
  end

    # POST /users or /users.json
  def create
    career = Career.create!(new_career_data_param)

  end

  ### actions for getting images from CareerPicture model
  def create_image
    @career_picture = CareerPicture.create(career_picture_params)
    render json: { url: url_for(@career_picture.featured_image) }
  end

  def get_images
    @career_pictures = CareerPicture.all
    render json: @career_pictures
  end

  def find_image
    @career_picture = CareerPicture.all
    if @career_picture
      render json: @career_picture
    else
      render json: @career_picture.errors
    end
  end

  def update
    if career
      career.update!(career_data_param)
      render json: career
    else
      render json: career.errors
    end
  end

  # DELETE /users/1 or /users/1.json
  def destroy
    career&.destroy
  end

  #search hashtag array with user values
  def find
    param_term = params[:term].to_str.downcase
    if params[:term]
      hashtag = Career.where("hashtag && Array[?]", params[:term])
      partial = Career.where("hashtag::text LIKE ?", "%#{param_term}%")
      if partial.empty?
        response = ["Error."]    
        puts "No words were found to match #{param_term}"
        render json: response
      else
        puts "Words that match: #{partial.to_json}"
        render json: partial 
      end
    else
      render json: {
        status: 401,
        error: ['There was a search error.'],
      }
    end
  end

  def career
    @career ||= Career.find(params[:id])
  end

  private
  def career_data_param
    params.require(:career).permit(:id, :name, :description, :title, :skills, :advice, :education, :pay, :environment, {hashtag: []}, :image)
  end 

  def new_career_data_param
    params.require(:career).permit(:id, :name, :description, :favorite, :title, :skills, :advice, :education, :pay, :environment, {hashtag: []}, :image, {addtl_img: []})
  end 

  def career_picture_params
    params.permit(:name, :title, :featured_image)
  end

  def hashtag_param
    params.permit(:hashtag)
  end

  def find_picture
    @picture = CareerPicture.find(params[:name])
  end
end

