# Preview all emails at http://localhost:3000/rails/mailers/new_user_mailer
class NewUserMailerPreview < ActionMailer::Preview
    def verification_email
        NewUserMailer.with(user: User.first).verification_email
    end
end
