Rails.application.routes.draw do
  root "static_pages#home"

  resources :users, only: [:new, :create, :index, :show, :update]
end
