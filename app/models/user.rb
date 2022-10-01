class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable

  has_one_attached :image

  PENDING=0
  APPROVED=1
  REJECTED=2

  STUDENT=0
  TEACHER=1
  STAFF=2

  enum status: {
    Pending: PENDING,
    Approved: APPROVED,
    Rejected: REJECTED
  }

  enum role: {
    Student: STUDENT,
    Teacher: TEACHER,
    Staff: STAFF
  }

end
