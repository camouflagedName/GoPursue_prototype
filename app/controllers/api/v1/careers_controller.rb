class Api::V1::CareersController < ApplicationController
  def index
    career = Career.all.order(created_at: :desc)
    render json: career
  end

  def show
    if career
      render json: career
    else
      render json: career.errors    
    end
  end

  def update
    if career
      career.update!(bookmark_param)
      render json: career
    else
      render json: career.errors
    end
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
  def bookmark_param
    params.permit(:id, :bookmark)
  end

  def hashtag_param
    params.permit(:hashtag)
  end
end
