# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170117183748) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_joins", force: :cascade do |t|
    t.integer  "channel_id", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_joins_on_channel_id", using: :btree
    t.index ["user_id"], name: "index_channel_joins_on_user_id", using: :btree
  end

  create_table "channels", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "owner_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_channels_on_owner_id", using: :btree
  end

  create_table "direct_messages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "title"
  end

  create_table "dm_joins", force: :cascade do |t|
    t.integer  "user_id",           null: false
    t.integer  "direct_message_id", null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["direct_message_id"], name: "index_dm_joins_on_direct_message_id", using: :btree
    t.index ["user_id", "direct_message_id"], name: "index_dm_joins_on_user_id_and_direct_message_id", unique: true, using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "author_id",     null: false
    t.text     "body",          null: false
    t.string   "postable_type"
    t.integer  "postable_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["postable_type", "postable_id"], name: "index_messages_on_postable_type_and_postable_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
