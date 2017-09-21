class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :avatar, AvatarUploader

  def is_admin?
      self.role == "admin"
  end

  has_many :releases
  has_many :reviews
  has_many :upvotes
  has_many :downvotes
  has_many :reviews, through: :upvotes
end
