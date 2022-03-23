require 'aws-sdk-ses'

class NewUserMailer < ApplicationMailer
    #default from: 'no-reply@gopursuecareer.com'
    
    def verification_email
        @user = params[:user]
        #@user.confirm_token = SecureRandom.urlsafe_base64.to_s  #note: this is already included in the controller
        receiver = @user.email
        sender = "no-reply@gopursuecareer.com"
        subject = "Verify your Email Address with GoPursue"
        htmlbody = render_to_string(:partial => 'new_user_mailer/verification_email.html.erb', :layout => false, :locals => {:user => @user})

        #mail(to: @user.email, subject: 'Verify your Email Address with GoPursue')
        send_email(receiver, sender, subject, htmlbody)
    end

    def send_email(receiver, sender, subject, htmlbody)
        region = "us-east-1"

        encoding = "UTF-8"

        # configure SES session
        ses = Aws::SES::Client.new(region: region, access_key_id: "AKIARZANCSVGEOOGKS5L", secret_access_key: "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")

        begin
            ses.send_email({
                destination: {
                    to_addresses: [
                        receiver,
                    ],
                    },
                message: {
                    body: {
                        html: {
                        charset: encoding,
                        data: htmlbody,
                        }
                    },
                subject: {
                    charset: encoding,
                    data: subject,
                },
                },
                source: sender,
                })
            puts "Email sent!"
        rescue Aws::SES::Errors::ServiceError => error
            puts "Email not sent. Error message: #{error}"
        end
    end
end
