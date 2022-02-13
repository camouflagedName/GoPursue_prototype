class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token 
  before_action :set_user, only: %i[ show edit update destroy ]

  # GET /users or /users.json
  def index
    user = User.all.order(created_at: :asc)
    render json: user 
  end

  def login
    if confirm_user #&& confirm_user.authenticate(:password)
      render json: confirm_user
    else 
      render json: confirm_user.errors
    end  
  end

  # GET /users/1 or /users/1.json
  def show
    if set_user
      render json: set_user
    else
      render json: set_user.errors    
    end
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users or /users.json
  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update
    if set_user
      set_user.update!(bookmark_param)
      render json: set_user
    else
      render json: set_user.errors
    end
  end

  def login_count
    if set_user
      set_user.update!(login_params)
      render json: set_user
    else
      render json: set_user.errors
    end
  end

  def user_data_update
    @user = User.find(params[:id])
    @current = params.require(:viewed_cards)[0]
    if set_user
      if @user.viewed_cards.include? @current
        puts "current: #{@current} |  array: #{@user.viewed_cards}"
      else
        viewed = @user.viewed_cards.push(params.require(:viewed_cards)[0])
        set_user.update!(viewed_cards: viewed)
        puts json: set_user
        render json: set_user
      end
    end
  end

  def user_time_update
    @user = User.find(params[:id])
    @total_time = params.require(:avg_time)
    if @user.avg_time
      @avg_time = (@user.avg_time * (@user.num_logins-1) + @total_time)/(@user.num_logins)
    else
      @avg_time = (@total_time)/(@user.num_logins)
    end
    if @user
      @user.update!(avg_time: @avg_time)
      render json: @user
    else
      render json: @user.errors
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def confirm_user
      @user = User.find(params[:name])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :password, :password_confirmation, :age, :interests, :bookmark, :created_on, :num_logins)
    end

    private
    def bookmark_param
      params.require(:user).permit(:id, bookmarks: [])
    end

    private
    def login_params
      params.require(:user).permit(:id, :num_logins, :last_login)
    end

end
