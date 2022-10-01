class Course < ApplicationRecord
  belongs_to :course_type, optional: true
  belongs_to :creator, class_name: 'User', foreign_key: :creator_id, optional: true

  has_one_attached :banner
  has_rich_text :long_description
  

  validates :title, :code, presence: true, uniqueness: true

  DRAFTED=0
  PUBLISHED=1
  
  enum status: {
    Drafted: DRAFTED,
    Published: PUBLISHED
  }

  MONTHLY=0
  YEARLY=1

  enum subscription_type: {
    Monthly: MONTHLY,
    Yearly: YEARLY
  }

  def displayed_banner(version = 'original')
    begin
      if banner.attached?
        case version
        when 'thumb'
          banner.variant(resize: '100x100')
        when 'resized'
          banner.variant(resize: '250x250')
        else
          banner
        end
      else
        ActionController::Base.helpers.image_path('default_course_banner.jpg')
      end
    rescue e
      ActionController::Base.helpers.image_path('default_course_banner.jpg')
    end
  end


  rails_admin do
    list do
      field :code
      field :title
      field :course_type
      field :status
    end
  end


end
