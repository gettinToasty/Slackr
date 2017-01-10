# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Channels

- `GET /api/channels`
  - accepts `category` parameter for sorting
- `GET /api/channels/:id`

### Direct Messages

- `GET /api/direct_messages`
- `GET /api/direct_messages/:id`
- `POST /api/direct_messages`
- `DELETE /api/direct_messages`

### Messages

- `GET /api/messages`
  - belongs to either a channel or a DM
  - accepts `postable_id`  and `postable_type` as params to display properly in channel or DM
- `POST /api/messages`
- `GET /api/messages/:id`
- `PATCH /api/messages/:id`
- `DELETE /api/messages/:id`
