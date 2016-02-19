Rails.application.routes.draw do
  # root "static_pages#home"
  root "static_pages#index"

  resources :users, only: [:new, :create, :index, :show, :update]

  namespace :api, defaults: {format: :json} do
    resources :meals, only: [:create, :update, :show]
  end
end
