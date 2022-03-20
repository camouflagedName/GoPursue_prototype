class NewUserMailer < ApplicationMailer
    default from: 'no-reply@gopursuecareer.com'
    
    def verification_email
        @user = params[:user]
        @user.confirm_token = SecureRandom.urlsafe_base64.to_s

        mail(to: @user.email, subject: 'Verify your Email Address with GoPursue')
    end
end
