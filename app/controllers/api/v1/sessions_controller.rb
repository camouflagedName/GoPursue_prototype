class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    user = User.find_by(name: params[:name])
    if user.try(:authenticate, params[:password])
      session[:user_id] = user.id
      render json: {
        logged_in: true,
        user: user
      }
    else
      render json: {
        status: 401,
        error: ['There was an error with the user and password combination.'],
      }
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {
      status: 200,
      logged_out: true
    }
  end
end
