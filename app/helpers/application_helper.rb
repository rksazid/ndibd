module ApplicationHelper
  def get_course_card_classes(idx)
    if(idx%2 == 0)
      if(idx > 2)
        'mt-4'
      else
        'mt-4 mt-md-0'
      end
    elsif(idx%3 == 0)
      'mt-4 mt-lg-0'
    else
      ''
    end
  end
end
