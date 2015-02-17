class ContactController < ApplicationController
  def new
    @email = Email.new
  end

  def create
    @email = Email.new params.require(:email).permit(:email, :message)
    @email.save
  end
end
