class ApplicationController < ActionController::Base
  layout :set_layout

  private
  def set_layout
    if request.path_info.include?('/admin')  or request.path_info.include?('/sign_in')
      'admin'
    else
      'application'
    end
  end
end
