class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token 
  before_action :set_user, only: %i[ show edit update destroy ]

  # GET /users or /users.json
  def index
    user = User.all.order(created_at: :asc)
    render json: user 
  end

  def confirmation
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
    #@user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  def destroy
    user&.destroy
  end

  #email verification
  def verify_email
    email = params[:user][:email]
    check_email_exists = User.find_by_email(email)
    if check_email_exists
      render json: {
        error: "This email has already been registered."
      }
    else
      user = User.new(user_params)
      new_token = SecureRandom.urlsafe_base64.to_s
      #send verification email
      #respond_to do |format|
      if user.save
        user.update!(confirm_token: new_token)
        NewUserMailer.with(user: user).verification_email.deliver_now
        render json: {
          message: "A verification link has been sent to #{user.email}. Please check your inbox and follow the instructions. CODE: #{user.confirm_token}"
        }
      else
        puts "***************Error: New User Table was not created********************"
        render json: {
          error: "Error with the system. Please contact the system administrator."
        }
      end
    end
  end

  #what happens after email is sent and link is clicked
  def confirm_email
    data = params[:id]
    user = User.find_by_confirm_token(data)
    if user
      puts user.email
      user.update!(email_confirm: true)
      render :confirmation
      #render json: user.email
    else
      #render plain: "Verification has been sent. You can now return to the app and continue with the login process."
      render "users/confirmation"
    end
  end

  def check_confirm_email
    email = params[:id]
    user = User.find_by_email(email)
    if user
      if user.email_confirm
        puts user.id
        render json: true
        #render :confirmation
      else
        puts "-------User has not responded!--------"
        render json: false
      end
    else
      puts "********User could not be found************"
      render json: false
    end
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
      params.require(:user).permit(:name, :password, :password_confirmation, :age, :interests, :bookmark, :created_on, :num_logins, :email, :email_confirm, :confirm_token)
    end

    def email_params
      params.require(:user).permit(:email)
    end

    private
    def bookmark_param
      params.require(:user).permit(:id, bookmarks: [])
    end

    private
    def login_params
      params.require(:user).permit(:id, :num_logins, :last_login)
    end

    private
    def confirmation_token
      confirm_token = SecureRandom.urlsafe_base64.to_s
    end

end
