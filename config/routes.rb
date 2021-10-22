Rails.application.routes.draw do
  root 'homepage#index'

  get 'admin' => 'admin#index'
  get 'admin/*path' => 'admin#index'
  get 'careerinfo' => 'admin#index'
  get 'careercard' => 'homepage#index'
  get 'search' => 'homepage#index'
  get 'newuser' => 'homepage#index'
  #get '*path' => 'homepage#index'

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
        put 'users/login_count/:id', to: 'users#login_count'
      end
    end
    resources :careers
    namespace :api do
      namespace :v1 do
        get 'careers/admin/index', to: 'careers#index'
        get 'careers/index', to: 'careers#index'
        post 'careers/create', to: 'careers#create'
        post 'careers/createImage', to: 'careers#create_image'
        post 'careers/findImage', to: 'careers#find_image'
        get 'careers/show/:id', to: 'careers#show'
        delete 'careers/destroy/:id', to: 'careers#destroy'
        put 'careers/update/:id', to: 'careers#update'
        put 'careers/admin/update/:id', to: 'careers#update'
        post 'careers/find', to: 'careers#find'
        get 'careers/random_career', to: 'careers#random_career'
      end
    end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
