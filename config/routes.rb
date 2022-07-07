Rails.application.routes.draw do
  root 'homepage#index'

  get 'login' => 'homepage#index'
  get 'admin' => 'admin#index'
  get 'admin/*path' => 'admin#index'
  get 'careerinfo' => 'admin#index'
  get 'main' => 'homepage#index'
# get 'careerCard' => 'homepage#index'
# get 'search' => 'homepage#index'
# get 'Search' => 'homepage#index'
# get 'returnUser' => 'homepage#index'
  get 'newUser' => 'homepage#index'
  get 'returnuser' => 'homepage#index'
  get 'newuser' => 'homepage#index'
  get 'guest' => 'homepage#index'
# get 'profile' => 'homepage#index'
# get '*path' => 'homepage#index'

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
          post 'users/create_guest', to: 'users#create_guest'
          post 'users/verify_email', to: 'users#verify_email'
          post 'users/create'
          put 'users/update/:id', to: 'users#update'
          get 'users/show/:id', to: 'users#show'
          get 'users/index', to: 'users#index'
          put 'users/login_count/:id', to: 'users#login_count'
          put 'users/data/:id', to: 'users#user_data_update'
          put 'users/time/:id', to: 'users#user_time_update'
          get :confirm_email

          get 'users/check_confirm_email/:id', to: 'users#check_confirm_email', constraints: {id: /.*/}
          get 'users/confirm_email/:id', to: 'users#confirm_email'
          get 'users/confirmation', to: 'users#confirmation'
          get 'users/confirmation_failure', to: 'users#confirmation_failure'
        end
      end
    resources :careers
      namespace :api do
        namespace :v1 do
          get 'careers/admin/index', to: 'careers#index'
          get 'careers/index', to: 'careers#index'
          post 'careers/bookmarks', to: 'careers#get_bookmarked_careers'
          post 'careers/create', to: 'careers#create'
          post 'careers/createImage', to: 'careers#create_image'
          post 'careers/findImage', to: 'careers#find_image'
          get 'careers/show/:id', to: 'careers#show'
          delete 'careers/destroy/:id', to: 'careers#destroy'
          put 'careers/update/:id', to: 'careers#update'
          put 'careers/admin/update/:id', to: 'careers#update'
          post 'careers/find', to: 'careers#find'
          get 'careers/random_career', to: 'careers#random_career'
          get 'careers/get_random_hashtag', to: 'careers#get_random_hashtag'
        end
      end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
