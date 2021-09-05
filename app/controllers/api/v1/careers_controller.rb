class Api::V1::CareersController < ApplicationController
  def index
    careerInfo = Career.all.order
    render json: career
  end

  def create
  end

  def show
    if career
      render json: career
    else
      render json: career.errors    
    end
  end

  def destroy
  end

  def career
    @career ||= Career.find(params[:id])
  end
end
