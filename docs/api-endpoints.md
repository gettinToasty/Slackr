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
- `POST /api/channels`
- `GET /api/channels/:id`
- `PATCH /api/channels/:id`
- `DELETE /api/channels/:id`

### Messages

- `GET /api/messages`
  - belongs to either a channel or a DM
  - accepts `postable_id` as a param to display properly in channel or DM
- `POST /api/messages`
- `GET /api/messages/:id`
- `PATCH /api/messages/:id`
- `DELETE /api/messages/:id`
