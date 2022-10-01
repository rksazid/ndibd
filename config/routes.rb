Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'homes#index'
  get 'courses', to: 'homes#courses', as: 'courses'
end
