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

  def career
    @career ||= Career.find(params[:id])
  end
end
