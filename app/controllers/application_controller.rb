class ApplicationController < ActionController::API
  has_many :plants, dependent: :destroy
  has_secure_password

  
end
