class Api::V1::CareersController < ApplicationController
  def index
    career = Career.all.order(created_at: :asc)
    render json: career
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
      career = Career.create!(career_data_param)
      if user
        render json: user
      else
        render json: user.errors
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

  def find
    param_term = params[:term].to_str
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
    params.require(:career).permit(:id, :name, :title, :skills, :advice, :education, :pay, :environment, :hashtags)
  end

  def hashtag_param
    params.permit(:hashtag)
  end
end

