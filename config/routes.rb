Rails.application.routes.draw do
  root "static_pages#home"

  get 'users/new'

  get 'users/create'

  get 'users/index'

  get 'users/show'

  get 'users/update'
end
