Rails.application.routes.draw do
  resources :passwords, controller: "clearance/passwords", only: [:create, :new]
  resource :session, controller: "clearance/sessions", only: [:create]

  resources :users, controller: "clearance/users", only: [:create] do
    resource :password,
      controller: "clearance/passwords",
      only: [:create, :edit, :update]
  end

  get "/sign_in" => "clearance/sessions#new", as: "sign_in"
  delete "/sign_out" => "clearance/sessions#destroy", as: "sign_out"
  get "/sign_up" => "clearance/users#new", as: "sign_up"

  constraints Clearance::Constraints::SignedIn.new do
    root to: 'static_pages#home', as: :signed_in_root
  end

  constraints Clearance::Constraints::SignedOut.new do
    root to: 'static_pages#home'
  end

  # root "static_pages#home"
  # root "static_pages#index"

  resources :users, only: [:new, :create, :index, :show, :update]

  namespace :api, defaults: {format: :json} do
    resources :meals, only: [:create, :update, :show]
  end
end
