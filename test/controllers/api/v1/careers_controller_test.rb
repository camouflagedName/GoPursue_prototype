require "test_helper"

class Api::V1::CareersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_careers_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_careers_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_careers_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_careers_destroy_url
    assert_response :success
  end
end
