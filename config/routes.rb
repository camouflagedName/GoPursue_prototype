Rails.application.routes.draw do
resources :sessions
namespace :api do
  namespace :v1 do
    get 'sessions/new'
    post 'sessions/login', to: 'sessions#create'
    post 'sessions/logout', to: 'sessions#destroy'
  end
end
  resources :users
  namespace :api do
    namespace :v1 do
      post 'users/create'
      put 'users/update/:id', to: 'users#update'
      get 'users/show/:id', to: 'users#show'
      get 'users/index', to: 'users#index'
    end
  end
  resources :careers
  namespace :api do
    namespace :v1 do
      get 'careers/index', to: 'careers#index'
      post 'careers/create'
      get 'careers/show/:id', to: 'careers#show'
      delete 'careers/destroy/:id', to: 'careers#destroy'
      put 'careers/update/:id', to: 'careers#update'
      post 'careers/find', to: 'careers#find'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
