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
      puts bookmark_param
      career.update!(bookmark_param)
      render json: career
    else
      render json: career.errors
    end
  end

      

  def career
    @career ||= Career.find(params[:id])
  end

  private
  def bookmark_param
    params.permit(:id, :bookmark)
  end
end
