# ![LOGO](logo.png) Vimeo **flow**ground Connector

## Description

A generated **flow**ground connector for the Vimeo API (version 3.4).

Generated from: https://api.apis.guru/v2/specs/vimeo.com/3.4/openapi.json<br/>
Generated at: 2019-05-07T17:44:41+03:00

## API Description



## Authorization

Supported authorization schemes:
- Bearer Token
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Get an API specification

*Tags:* `API Information`

#### Input Parameters
* `openapi` - _optional_ - Return an OpenAPI specification.

### Get all categories

> This method gets all existing categories.

*Tags:* `Categories\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: last_video_featured_time, name.

### Get a specific category

*Tags:* `Categories\Essentials`

#### Input Parameters
* `category` - _required_ - The name of the category.

### Get all the channels in a category

*Tags:* `Categories\Channels`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, followers, videos.

### Get all the groups in a category

*Tags:* `Categories\Groups`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, members, videos.

### Get all the videos in a category

*Tags:* `Categories\Videos`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.

Option descriptions:
 * `conditional_featured` - Featured (promoted) videos

    Possible values: conditional_featured, embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, featured, likes, plays, relevant.

### Check for a video in a category

*Tags:* `Categories\Videos`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `video_id` - _required_ - The ID of the video.

### Get all channels

*Tags:* `Channels\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: featured.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.

Option descriptions:
 * `relevant` - Relevant sorting is available only for search queries.

    Possible values: alphabetical, date, followers, relevant, videos.

### Create a channel

> This method creates a new channel.

*Tags:* `Channels\Essentials`

### Delete a channel

*Tags:* `Channels\Essentials`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Get a specific channel

*Tags:* `Channels\Essentials`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Edit a channel

> This method edits the specified channel.

*Tags:* `Channels\Essentials`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Get all the categories in a channel

> This method gets all the categories in the specified channel.

*Tags:* `Channels\Categories`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Add a list of categories to a channel

> This method adds multiple categories to the specified channel.

*Tags:* `Channels\Categories`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Remove a category from a channel

> This method removes a single category from the specified channel.

*Tags:* `Channels\Categories`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `channel_id` - _required_ - The ID of the channel.

### Categorize a channel

> This method adds a channel to a category.

*Tags:* `Channels\Categories`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `channel_id` - _required_ - The ID of the channel.

### Remove a list of channel moderators

*Tags:* `Channels\Moderators`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Get all the moderators in a channel

*Tags:* `Channels\Moderators`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Replace the moderators of a channel

*Tags:* `Channels\Moderators`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Add a list of channel moderators

*Tags:* `Channels\Moderators`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Remove a specific channel moderator

*Tags:* `Channels\Moderators`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Get a specific channel moderator

*Tags:* `Channels\Moderators`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Add a specific channel moderator

*Tags:* `Channels\Moderators`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Get all the users who can view a private channel

> This method gets all the users who have access to the specified private channel.

*Tags:* `Channels\Private channel members`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Permit a list of users to view a private channel

> This method gives multiple users access to the specified private channel.

*Tags:* `Channels\Private channel members`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Restrict a user from viewing a private channel

> This method prevents a single user from being able to access the specified private channel.

*Tags:* `Channels\Private channel members`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Permit a specific user to view a private channel

> This method gives a single user access to the specified private channel.

*Tags:* `Channels\Private channel members`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Get all the tags that have been added to a channel

> This method gets all the tags that have been added to the specified channel.

*Tags:* `Channels\Tags`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Add a list of tags to a channel

> This method adds multiple tags to the specified channel.

*Tags:* `Channels\Tags`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Remove a tag from a channel

> This method removes a single tag from the specified channel.

*Tags:* `Channels\Tags`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `word` - _required_ - The word to use as the tag.

### Check if a tag has been added to a channel

> This method determines whether a specific tag has been added to the channel in question.

*Tags:* `Channels\Tags`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `word` - _required_ - The word to use as the tag.

### Add a specific tag to a channel

> This method adds a single tag to the specified channel.

*Tags:* `Channels\Tags`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `word` - _required_ - The word to use as the tag.

### Get all the followers of a channel

*Tags:* `Channels\Subscriptions and subscribers`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _required_ - The attribute by which to filter the results.
    Possible values: moderators.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Remove a list of videos from a channel

*Tags:* `Channels\Videos`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Get all the videos in a channel

*Tags:* `Channels\Videos`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `containing_uri` - _optional_ - The page that contains the video URI.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: added, alphabetical, comments, date, default, duration, likes, manual, modified_time, plays.

### Add a list of videos to a channel

*Tags:* `Channels\Videos`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Remove a specific video from a channel

*Tags:* `Channels\Videos`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Get a specific video in a channel

> This method returns a specific video in a channel. You can use it to determine whether the video is in the channel.

*Tags:* `Channels\Videos`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Add a specific video to a channel

*Tags:* `Channels\Videos`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Get all the comments on a video

*Tags:* `Videos\Comments`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a comment to a video

*Tags:* `Videos\Comments`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Get all the credited users in a video

*Tags:* `Videos\Credits`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Credit a user in a video

*Tags:* `Videos\Credits`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Get all the users who have liked a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get all the thumbnails of a video

*Tags:* `Videos\Thumbnails`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a video thumbnail

*Tags:* `Videos\Thumbnails`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Get all the users who can view a user's private videos by default

*Tags:* `Videos\Viewing Privacy`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Permit a list of users to view a private video

> The body of this request should follow our<br/>
> [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain<br/>
> a single `URI` field, and the value of this field must be the URI of the user who can view this video.

*Tags:* `Videos\Viewing Privacy`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Get all the text tracks of a video

*Tags:* `Videos\Text Tracks`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Add a text track to a video

> For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).

*Tags:* `Videos\Text Tracks`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `video_id` - _required_ - The ID of the video.

### Get all content ratings

*Tags:* `Videos\Content Ratings`

### Get all Creative Commons licenses

*Tags:* `Videos\Creative Commons`

### Get all groups

*Tags:* `Groups\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: featured.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.

Option descriptions:
 * `relevant` - Relevant sorting is available only for search queries.

    Possible values: alphabetical, date, followers, relevant, videos.

### Create a group

*Tags:* `Groups\Essentials`

### Delete a group

*Tags:* `Groups\Essentials`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.

### Get a specific group

*Tags:* `Groups\Essentials`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.

### Get all the members of a group

*Tags:* `Groups\Users`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: moderators.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get all the videos in a group

*Tags:* `Groups\Videos`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays.

### Remove a video from a group

*Tags:* `Groups\Videos`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `video_id` - _required_ - The ID of the video.

### Get a specific video in a group

> Check if a group has a video.

*Tags:* `Groups\Videos`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `video_id` - _required_ - The ID of the video.

### Add a video to a group

*Tags:* `Groups\Videos`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `video_id` - _required_ - The ID of the video.

### Get all languages

*Tags:* `Videos\Languages`

#### Input Parameters
* `filter` - _optional_ - The attribute by which to filter the results.

Option descriptions:
 * `texttracks` - Only return text track supported languages

    Possible values: texttracks.

### Get a user

*Tags:* `Users\Essentials`

### Edit a user

*Tags:* `Users\Essentials`

### Get all the albums that belong to a user

*Tags:* `Albums\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, duration, videos.

### Create an album

*Tags:* `Albums\Essentials`

### Delete an album

*Tags:* `Albums\Essentials`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.

### Get a specific album

*Tags:* `Albums\Essentials`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.

### Edit an album

*Tags:* `Albums\Essentials`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.

### Get all the videos in an album

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `containing_uri` - _optional_ - The page containing the video URI.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `password` - _optional_ - The password of the album.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, default, duration, likes, manual, modified_time, plays.
* `weak_search` - _optional_ - Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.

### Replace all the videos in an album

> This method replaces all the existing videos in an album with one or more videos.

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.

### Remove a video from an album

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `video_id` - _required_ - The ID of the video.

### Get a specific video in an album

> This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `video_id` - _required_ - The ID of the video.
* `password` - _optional_ - The password of the album.

### Add a specific video to an album

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `video_id` - _required_ - The ID of the video.

### Set a video as the album thumbnail

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `video_id` - _required_ - The ID of the video.

### Get all the videos in which a user appears

*Tags:* `Videos\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays.

### Get all the categories that a user follows

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, name.

### Unsubscribe a user from a category

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `category` - _required_ - The name of the category.

### Check if a user follows a category

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `category` - _required_ - The name of the category.

### Subscribe a user to a single category

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `category` - _required_ - The name of the category.

### Get all the channels to which a user subscribes

*Tags:* `Channels\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: moderated.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, followers, videos.

### Unsubscribe a user from a specific channel

*Tags:* `Channels\Subscriptions and subscribers`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Check if a user follows a channel

*Tags:* `Channels\Subscriptions and subscribers`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Subscribe a user to a specific channel

*Tags:* `Channels\Subscriptions and subscribers`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.

### Get all the custom logos that belong to a user

*Tags:* `Embed Presets\Custom Logos`

### Add a custom logo

*Tags:* `Embed Presets\Custom Logos`

### Get a specific custom logo

*Tags:* `Embed Presets\Custom Logos`

#### Input Parameters
* `logo_id` - _required_ - The ID of the custom logo.

### Get all videos in a user's feed

*Tags:* `Users\Feed`

#### Input Parameters
* `offset` - _optional_ - Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `type` - _optional_ - The feed type.
    Possible values: appears, category_featured, channel, facebook_feed, following, group, likes, ondemand_publish, share, tagged_with, twitter_timeline, uploads.

### Get all the followers of a user

*Tags:* `Users\Follows`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get all the users that a user is following

*Tags:* `Users\Follows`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: online.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Follow a list of users

*Tags:* `Users\Follows`

### Unfollow a user

*Tags:* `Users\Follows`

#### Input Parameters
* `follow_user_id` - _required_ - The ID of the following user.

### Check if a user is following another user

*Tags:* `Users\Follows`

#### Input Parameters
* `follow_user_id` - _required_ - The ID of the following user.

### Follow a specific user

*Tags:* `Users\Follows`

#### Input Parameters
* `follow_user_id` - _required_ - The ID of the following user.

### Get all the groups that a user has joined

*Tags:* `Groups\Users`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: moderated.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, members, videos.

### Remove a user from a group

*Tags:* `Groups\Subscription`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.

### Check if a user has joined a group

*Tags:* `Groups\Users`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.

### Add a user to a group

*Tags:* `Groups\Subscription`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.

### Get all the videos that a user has liked

*Tags:* `Likes\Essentials`

#### Input Parameters
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays.

### Cause a user to unlike a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Check if a user has liked a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Cause a user to like a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get all the On Demand pages of a user

*Tags:* `On Demand\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The type of On Demand pages to return.
    Possible values: film, series.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: added, alphabetical, date, modified_time, name, publish.time, rating.

### Create an On Demand page

*Tags:* `On Demand\Essentials`

### Get all the On Demand purchases and rentals that a user has made

*Tags:* `On Demand\Purchases and Rentals`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The type of On Demand videos to show.

Option descriptions:
 * `important` - Will show all pages which are about to expire.

    Possible values: all, expiring_soon, film, important, purchased, rented, series, subscription, unwatched, watched.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: added, alphabetical, date, name, purchase_time, rating, release_date.

### Check if a user has made a purchase or rental from an On Demand page

*Tags:* `On Demand\Purchases and Rentals`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get all the pictures that belong to a user

*Tags:* `Users\Pictures`

#### Input Parameters
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a user picture

*Tags:* `Users\Pictures`

### Delete a user picture

*Tags:* `Users\Pictures`

#### Input Parameters
* `portraitset_id` - _required_ - The ID of the picture.

### Get a specific user picture

*Tags:* `Users\Pictures`

#### Input Parameters
* `portraitset_id` - _required_ - The ID of the picture.

### Edit a user picture

*Tags:* `Users\Pictures`

#### Input Parameters
* `portraitset_id` - _required_ - The ID of the picture.

### Get all the portfolios that belong to a user

*Tags:* `Portfolios\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get a specific portfolio

*Tags:* `Portfolios\Essentials`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.

### Get all the videos in a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `containing_uri` - _optional_ - The page that contains the video URI.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.

Option descriptions:
 * `default` - This will sort to the default sort set on the portfolio.

    Possible values: alphabetical, comments, date, default, likes, manual, plays.

### Remove a video from a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `video_id` - _required_ - The ID of the video.

### Get a specific video in a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `video_id` - _required_ - The ID of the video.

### Add a video to a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `video_id` - _required_ - The ID of the video.

### Get all the embed presets that a user has created

*Tags:* `Embed Presets\Essentials`

#### Input Parameters
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Get a specific embed preset

*Tags:* `Embed Presets\Essentials`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.

### Edit an embed preset

*Tags:* `Embed Presets\Essentials`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.

### Get all the videos that have been added to an embed preset

*Tags:* `Embed Presets\Videos`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Get all the projects that belong to a user

> This method gets all the projects that belong to the specified user.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: date, default, modified_time, name.

### Create a project

> This method creates a new project for the specified user.

*Tags:* `Projects\Essentials`

### Delete a project

> This method deletes a project and optionally also the videos that it contains.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `should_delete_clips` - _optional_ - Whether to delete all the videos in the project along with the project itself.

### Get a specific project

> This method gets a single project that belongs to the specified user.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.

### Edit a project

> This method edits an existing project.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.

### Remove a list of videos from a project

> This method removed multiple videos from the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `should_delete_clips` - _optional_ - Whether to delete the videos when removing them from the project.
* `uris` - _required_ - A comma-separated list of the video URIs to remove.

### Get all the videos in a project

> This method gets all the videos that belong to the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, default, duration, last_user_action_event_date.

### Add a list of videos to a project

> This method adds multiple videos to the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `uris` - _required_ - A comma-separated list of video URIs to add.

### Remove a specific video from a project

> This method removes a single video from the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `video_id` - _required_ - The ID of the video.

### Add a specific video to a project

> This method adds a single video to the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `video_id` - _required_ - The ID of the video.

### Get all the videos that a user has uploaded

*Tags:* `Videos\Essentials`

#### Input Parameters
* `containing_uri` - _optional_ - The page that contains the video URI. Only available when not paired with `query`.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: app_only, embeddable, featured, playable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `filter_playable` - _optional_ - Whether to filter by all playable videos or by all videos that are not  playable.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, default, duration, last_user_action_event_date, likes, modified_time, plays.

### Upload a video

> Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).

*Tags:* `Videos\Upload`

### Check if a user owns a video

*Tags:* `Videos\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Delete a user's watch history

*Tags:* `Users\Watch History`

### Get all the videos that a user has watched

*Tags:* `Users\Watch History`

#### Input Parameters
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Delete a specific video from a user's watch history

*Tags:* `Users\Watch History`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get all the videos in a user's Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays.

### Remove a video from a user's Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Check if a user has added a specific video to their Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Add a video to a user's Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Exchange an authorization code for an access token

*Tags:* `Authentication Extras\Essentials`

### Authorize a client with OAuth

> For information on utilizing OAuth client authorization, see our<br/>
> [authentication](/api/authentication#generate-unauthenticated-tokens) documentation or the<br/>
> [Client Credentials Grant](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4) section of the<br/>
> [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31.

*Tags:* `Authentication Extras\Essentials`

### Convert OAuth 1 access tokens to OAuth 2 access tokens

*Tags:* `Authentication Extras\Essentials`

### Verify an OAuth 2 token

*Tags:* `Authentication Extras\Essentials`

### Get all On Demand genres

*Tags:* `On Demand\Genres`

### Get a specific On Demand genre

*Tags:* `On Demand\Genres`

#### Input Parameters
* `genre_id` - _required_ - The ID of the genre.

### Get all the On Demand pages in a genre

*Tags:* `On Demand\Genres`

#### Input Parameters
* `genre_id` - _required_ - The ID of the genre.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: country, my_region.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, name, publish.time, videos.

### Get a specific On Demand page in a genre

> Check whether a genre contains an On Demand page.

*Tags:* `On Demand\Genres`

#### Input Parameters
* `genre_id` - _required_ - The ID of the genre.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Delete a draft of an On Demand page

*Tags:* `On Demand\Essentials`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get a specific On Demand page

*Tags:* `On Demand\Essentials`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Edit an On Demand page

> Enable preorders or publish the page.

*Tags:* `On Demand\Essentials`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get all the backgrounds of an On Demand page

*Tags:* `On Demand\Backgrounds`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a background to an On Demand page

*Tags:* `On Demand\Backgrounds`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Remove a background from an On Demand page

*Tags:* `On Demand\Backgrounds`

#### Input Parameters
* `background_id` - _required_ - The ID of the background.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get a specific background of an On Demand page

*Tags:* `On Demand\Backgrounds`

#### Input Parameters
* `background_id` - _required_ - The ID of the background.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Edit a background of an On Demand page

*Tags:* `On Demand\Backgrounds`

#### Input Parameters
* `background_id` - _required_ - The ID of the background.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get all the genres of an On Demand page

*Tags:* `On Demand\Genres`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Remove a genre from an On Demand page

*Tags:* `On Demand\Genres`

#### Input Parameters
* `genre_id` - _required_ - The ID of the genre.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Check whether an On Demand page belongs to a genre

*Tags:* `On Demand\Genres`

#### Input Parameters
* `genre_id` - _required_ - The ID of the genre.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Add a genre to an On Demand page

*Tags:* `On Demand\Genres`

#### Input Parameters
* `genre_id` - _required_ - The ID of the genre.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get all the users who have liked a video on an On Demand page

> This method gets all the users who have liked a particular video on an On Demand page.

*Tags:* `Likes\Essentials`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand page.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: extra, main, trailer.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get all the posters of an On Demand page

*Tags:* `On Demand\Posters`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a poster to an On Demand page

*Tags:* `On Demand\Posters`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get a specific poster of an On Demand page

*Tags:* `On Demand\Posters`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `poster_id` - _required_ - The ID of the picture.

### Edit a poster of an On Demand page

*Tags:* `On Demand\Posters`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `poster_id` - _required_ - The ID of the picture.

### Get all the promotions on an On Demand page

*Tags:* `On Demand\Promotions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `filter` - _required_ - The filter to apply to the results.
    Possible values: batch, default, single, vip.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a promotion to an On Demand page

*Tags:* `On Demand\Promotions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Remove a promotion from an On Demand page

*Tags:* `On Demand\Promotions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `promotion_id` - _required_ - The ID of the promotion.

### Get a specific promotion on an On Demand page

*Tags:* `On Demand\Promotions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `promotion_id` - _required_ - The ID of the promotion.

### Get all the codes of a promotion on an On Demand page

*Tags:* `On Demand\Promotions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `promotion_id` - _required_ - The ID of the promotion.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Remove a list of regions from an On Demand page

*Tags:* `On Demand\Regions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get all the regions of an On Demand page

*Tags:* `On Demand\Regions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Add a list of regions to an On Demand page

*Tags:* `On Demand\Regions`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.

### Remove a specific region from an On Demand page

*Tags:* `On Demand\Regions`

#### Input Parameters
* `country` - _required_ - The country code.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get a specific region of an On Demand page

> Checks whether an On Demand page belongs to a region.

*Tags:* `On Demand\Regions`

#### Input Parameters
* `country` - _required_ - The country code.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Add a specific region to an On Demand page

*Tags:* `On Demand\Regions`

#### Input Parameters
* `country` - _required_ - The country code.
* `ondemand_id` - _required_ - The ID of the On Demand.

### Get all the seasons on an On Demand page

*Tags:* `On Demand\Seasons`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: viewable.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: date, manual.

### Get a specific season on an On Demand page

*Tags:* `On Demand\Seasons`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `season_id` - _required_ - The ID of the season.

### Get all the videos in a season on an On Demand page

*Tags:* `On Demand\Seasons`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `season_id` - _required_ - The ID of the season.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: viewable.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: date, default, manual, name, purchase_time, release_date.

### Get all the videos on an On Demand page

*Tags:* `On Demand\Videos`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: all, buy, expiring_soon, extra, main, main.viewable, rent, trailer, unwatched, viewable, watched.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: date, default, episode, manual, name, purchase_time, release_date.

### Remove a video from an On Demand page

*Tags:* `On Demand\Videos`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `video_id` - _required_ - The ID of the video.

### Get a specific video on an On Demand page

*Tags:* `On Demand\Videos`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `video_id` - _required_ - The ID of the video.

### Add a video to an On Demand page

*Tags:* `On Demand\Videos`

#### Input Parameters
* `ondemand_id` - _required_ - The ID of the On Demand.
* `video_id` - _required_ - The ID of the video.

### Get all the On Demand regions

*Tags:* `On Demand\Regions`

### Get a specific On Demand region

*Tags:* `On Demand\Regions`

#### Input Parameters
* `country` - _required_ - The country code.

### Get a specific tag

*Tags:* `Tags\Essentials`

#### Input Parameters
* `word` - _required_ - The tag to return.

### Get all the videos with a specific tag

*Tags:* `Videos\Tags`

#### Input Parameters
* `word` - _required_ - The tag word.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: created_time, duration, name.

### Revoke the current access token

> This method enables an app to notify the API that it is done with a token and that the token can be discarded.

*Tags:* `Authentication Extras\Essentials`

### Search for users

*Tags:* `Users\Internal`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, followers, relevant, videos.

### Get a user

*Tags:* `Users\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Edit a user

*Tags:* `Users\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Get all the albums that belong to a user

*Tags:* `Albums\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, duration, videos.

### Create an album

*Tags:* `Albums\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Delete an album

*Tags:* `Albums\Essentials`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.

### Get a specific album

*Tags:* `Albums\Essentials`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.

### Edit an album

*Tags:* `Albums\Essentials`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.

### Get all the custom upload thumbnails of an album

*Tags:* `Albums\Custom album thumbnails`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a custom uploaded thumbnail

*Tags:* `Albums\Custom album thumbnails`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.

### Remove a custom uploaded album thumbnail

> This method removes a custom uploaded thumbnail from the specified album.

*Tags:* `Albums\Custom album thumbnails`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `thumbnail_id` - _required_ - The ID of the custom thumbnail.
* `user_id` - _required_ - The ID of the user.

### Get a specific custom uploaded album thumbnail

*Tags:* `Albums\Custom album thumbnails`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `thumbnail_id` - _required_ - The ID of the custom thumbnail.
* `user_id` - _required_ - The ID of the user.

### Replace a custom uploaded album thumbnail

*Tags:* `Albums\Custom album thumbnails`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `thumbnail_id` - _required_ - The ID of the custom thumbnail.
* `user_id` - _required_ - The ID of the user.

### Get all the custom logos of an album

*Tags:* `Albums\Custom album logos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a custom album logo

*Tags:* `Albums\Custom album logos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.

### Remove a custom album logo

> This method removes a custom logo from the specified album.

*Tags:* `Albums\Custom album logos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `logo_id` - _required_ - The ID of the custom logo.
* `user_id` - _required_ - The ID of the user.

### Get a specific custom album logo

*Tags:* `Albums\Custom album logos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `logo_id` - _required_ - The ID of the custom logo.
* `user_id` - _required_ - The ID of the user.

### Replace a custom album logo

*Tags:* `Albums\Custom album logos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `logo_id` - _required_ - The ID of the custom logo.
* `user_id` - _required_ - The ID of the user.

### Get all the videos in an album

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.
* `containing_uri` - _optional_ - The page containing the video URI.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `password` - _optional_ - The password of the album.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, default, duration, likes, manual, modified_time, plays.
* `weak_search` - _optional_ - Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.

### Replace all the videos in an album

> This method replaces all the existing videos in an album with one or more videos.

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.

### Remove a video from an album

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Get a specific video in an album

> This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.
* `password` - _optional_ - The password of the album.

### Add a specific video to an album

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Set a video as the album thumbnail

*Tags:* `Albums\Album videos`

#### Input Parameters
* `album_id` - _required_ - The ID of the album.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Get all the videos in which a user appears

*Tags:* `Videos\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays.

### Get all the categories that a user follows

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, name.

### Unsubscribe a user from a category

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `user_id` - _required_ - The ID of the user.

### Check if a user follows a category

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `user_id` - _required_ - The ID of the user.

### Subscribe a user to a single category

*Tags:* `Categories\Subscriptions`

#### Input Parameters
* `category` - _required_ - The name of the category.
* `user_id` - _required_ - The ID of the user.

### Get all the channels to which a user subscribes

*Tags:* `Channels\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: moderated.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, followers, videos.

### Unsubscribe a user from a specific channel

*Tags:* `Channels\Subscriptions and subscribers`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Check if a user follows a channel

*Tags:* `Channels\Subscriptions and subscribers`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Subscribe a user to a specific channel

*Tags:* `Channels\Subscriptions and subscribers`

#### Input Parameters
* `channel_id` - _required_ - The ID of the channel.
* `user_id` - _required_ - The ID of the user.

### Get all the custom logos that belong to a user

*Tags:* `Embed Presets\Custom Logos`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Add a custom logo

*Tags:* `Embed Presets\Custom Logos`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Get a specific custom logo

*Tags:* `Embed Presets\Custom Logos`

#### Input Parameters
* `logo_id` - _required_ - The ID of the custom logo.
* `user_id` - _required_ - The ID of the user.

### Get all videos in a user's feed

*Tags:* `Users\Feed`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `offset` - _optional_ - Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `type` - _optional_ - The feed type.
    Possible values: appears, category_featured, channel, facebook_feed, following, group, likes, ondemand_publish, share, tagged_with, twitter_timeline, uploads.

### Get all the followers of a user

*Tags:* `Users\Follows`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get all the users that a user is following

*Tags:* `Users\Follows`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: online.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Follow a list of users

*Tags:* `Users\Follows`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Unfollow a user

*Tags:* `Users\Follows`

#### Input Parameters
* `follow_user_id` - _required_ - The ID of the following user.
* `user_id` - _required_ - The ID of the user.

### Check if a user is following another user

*Tags:* `Users\Follows`

#### Input Parameters
* `follow_user_id` - _required_ - The ID of the following user.
* `user_id` - _required_ - The ID of the user.

### Follow a specific user

*Tags:* `Users\Follows`

#### Input Parameters
* `follow_user_id` - _required_ - The ID of the following user.
* `user_id` - _required_ - The ID of the user.

### Get all the groups that a user has joined

*Tags:* `Groups\Users`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: moderated.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, members, videos.

### Remove a user from a group

*Tags:* `Groups\Subscription`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `user_id` - _required_ - The ID of the user.

### Check if a user has joined a group

*Tags:* `Groups\Users`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `user_id` - _required_ - The ID of the user.

### Add a user to a group

*Tags:* `Groups\Subscription`

#### Input Parameters
* `group_id` - _required_ - The ID of the group.
* `user_id` - _required_ - The ID of the user.

### Get all the videos that a user has liked

*Tags:* `Likes\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays.

### Cause a user to unlike a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Check if a user has liked a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Cause a user to like a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Get all the On Demand pages of a user

*Tags:* `On Demand\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The type of On Demand pages to return.
    Possible values: film, series.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: added, alphabetical, date, modified_time, name, publish.time, rating.

### Create an On Demand page

*Tags:* `On Demand\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Check if a user has made a purchase or rental from an On Demand page

*Tags:* `On Demand\Purchases and Rentals`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Get all the pictures that belong to a user

*Tags:* `Users\Pictures`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a user picture

*Tags:* `Users\Pictures`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Delete a user picture

*Tags:* `Users\Pictures`

#### Input Parameters
* `portraitset_id` - _required_ - The ID of the picture.
* `user_id` - _required_ - The ID of the user.

### Get a specific user picture

*Tags:* `Users\Pictures`

#### Input Parameters
* `portraitset_id` - _required_ - The ID of the picture.
* `user_id` - _required_ - The ID of the user.

### Edit a user picture

*Tags:* `Users\Pictures`

#### Input Parameters
* `portraitset_id` - _required_ - The ID of the picture.
* `user_id` - _required_ - The ID of the user.

### Get all the portfolios that belong to a user

*Tags:* `Portfolios\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get a specific portfolio

*Tags:* `Portfolios\Essentials`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `user_id` - _required_ - The ID of the user.

### Get all the videos in a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `user_id` - _required_ - The ID of the user.
* `containing_uri` - _optional_ - The page that contains the video URI.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.

Option descriptions:
 * `default` - This will sort to the default sort set on the portfolio.

    Possible values: alphabetical, comments, date, default, likes, manual, plays.

### Remove a video from a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Get a specific video in a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Add a video to a portfolio

*Tags:* `Portfolios\Videos`

#### Input Parameters
* `portfolio_id` - _required_ - The ID of the portfolio.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Get all the embed presets that a user has created

*Tags:* `Embed Presets\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Get a specific embed preset

*Tags:* `Embed Presets\Essentials`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.
* `user_id` - _required_ - The ID of the user.

### Edit an embed preset

*Tags:* `Embed Presets\Essentials`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.
* `user_id` - _required_ - The ID of the user.

### Get all the videos that have been added to an embed preset

*Tags:* `Embed Presets\Videos`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.
* `user_id` - _required_ - The ID of the user.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Get all the projects that belong to a user

> This method gets all the projects that belong to the specified user.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: date, default, modified_time, name.

### Create a project

> This method creates a new project for the specified user.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Delete a project

> This method deletes a project and optionally also the videos that it contains.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.
* `should_delete_clips` - _optional_ - Whether to delete all the videos in the project along with the project itself.

### Get a specific project

> This method gets a single project that belongs to the specified user.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.

### Edit a project

> This method edits an existing project.

*Tags:* `Projects\Essentials`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.

### Remove a list of videos from a project

> This method removed multiple videos from the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.
* `should_delete_clips` - _optional_ - Whether to delete the videos when removing them from the project.
* `uris` - _required_ - A comma-separated list of the video URIs to remove.

### Get all the videos in a project

> This method gets all the videos that belong to the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date, default, duration, last_user_action_event_date.

### Add a list of videos to a project

> This method adds multiple videos to the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.
* `uris` - _required_ - A comma-separated list of video URIs to add.

### Remove a specific video from a project

> This method removes a single video from the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Add a specific video to a project

> This method adds a single video to the specified project.

*Tags:* `Projects\Videos`

#### Input Parameters
* `project_id` - _required_ - The ID of the project.
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Complete a user's streaming upload

*Tags:* `Videos\Upload`

#### Input Parameters
* `upload` - _required_ - The ID of the upload attempt.
* `user_id` - _required_ - The ID of the user.
* `signature` - _required_ - The crypto signature of the completed upload.
* `video_file_id` - _required_ - The ID of the uploaded file.

### Get a user's upload attempt

*Tags:* `Videos\Upload`

#### Input Parameters
* `upload` - _required_ - The ID of the upload attempt.
* `user_id` - _required_ - The ID of the user.

### Get all the videos that a user has uploaded

*Tags:* `Videos\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `containing_uri` - _optional_ - The page that contains the video URI. Only available when not paired with `query`.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: app_only, embeddable, featured, playable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `filter_playable` - _optional_ - Whether to filter by all playable videos or by all videos that are not  playable.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, default, duration, last_user_action_event_date, likes, modified_time, plays.

### Upload a video

> Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).

*Tags:* `Videos\Upload`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.

### Check if a user owns a video

*Tags:* `Videos\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Get all the videos in a user's Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: embeddable.
* `filter_embeddable` - _optional_ - Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays.

### Remove a video from a user's Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Check if a user has added a specific video to their Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Add a video to a user's Watch Later queue

*Tags:* `Watch Later Queue\Essentials`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Search for videos

*Tags:* `Videos\Essentials`

#### Input Parameters
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `filter` - _optional_ - The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.
    Possible values: CC, CC-BY, CC-BY-NC, CC-BY-NC-ND, CC-BY-NC-SA, CC-BY-ND, CC-BY-SA, CC0, categories, duration, in-progress, minimum_likes, trending, upload_date.
* `links` - _optional_ - A comma-separated list of video URLs to find.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _required_ - Search query.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, comments, date, duration, likes, plays, relevant.
* `uris` - _optional_ - The comma-separated list of videos to find.

### Delete a video

*Tags:* `Videos\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get a specific video

*Tags:* `Videos\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Edit a video

*Tags:* `Videos\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get all the channels to which a user can add or remove a specific video

*Tags:* `Channels\Videos`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get all the categories to which a video belongs

*Tags:* `Categories\Videos`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Suggest categories for a video

> With this method, you can suggest up to two categories and one subcategory for a video. Vimeo makes the final determination about whether the video<br/>
> belongs in these categories.

*Tags:* `Categories\Videos`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get all the comments on a video

*Tags:* `Videos\Comments`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a comment to a video

*Tags:* `Videos\Comments`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Delete a video comment

*Tags:* `Videos\Comments`

#### Input Parameters
* `comment_id` - _required_ - The ID of the comment.
* `video_id` - _required_ - The ID of the video.

### Get a specific video comment

*Tags:* `Videos\Comments`

#### Input Parameters
* `comment_id` - _required_ - The ID of the comment.
* `video_id` - _required_ - The ID of the video.

### Edit a video comment

*Tags:* `Videos\Comments`

#### Input Parameters
* `comment_id` - _required_ - The ID of the comment.
* `video_id` - _required_ - The ID of the video.

### Get all the replies to a video comment

*Tags:* `Videos\Comments`

#### Input Parameters
* `comment_id` - _required_ - The ID of the comment.
* `video_id` - _required_ - The ID of the video.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a reply to a video comment

*Tags:* `Videos\Comments`

#### Input Parameters
* `comment_id` - _required_ - The ID of the comment.
* `video_id` - _required_ - The ID of the video.

### Get all the credited users in a video

*Tags:* `Videos\Credits`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `query` - _optional_ - The search query to use to filter the results.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Credit a user in a video

*Tags:* `Videos\Credits`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Delete a credit for a user in a video

*Tags:* `Videos\Credits`

#### Input Parameters
* `credit_id` - _required_ - The ID of the credit.
* `video_id` - _required_ - The ID of the video.

### Get a specific credited user in a video

*Tags:* `Videos\Credits`

#### Input Parameters
* `credit_id` - _required_ - The ID of the credit.
* `video_id` - _required_ - The ID of the video.

### Edit a credit for a user in a video

*Tags:* `Videos\Credits`

#### Input Parameters
* `credit_id` - _required_ - The ID of the credit.
* `video_id` - _required_ - The ID of the video.

### Get all the users who have liked a video

*Tags:* `Likes\Essentials`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `direction` - _optional_ - The sort direction of the results.
    Possible values: asc, desc.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.
* `sort` - _optional_ - The way to sort the results.
    Possible values: alphabetical, date.

### Get all the thumbnails of a video

*Tags:* `Videos\Thumbnails`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Add a video thumbnail

*Tags:* `Videos\Thumbnails`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Delete a video thumbnail

*Tags:* `Videos\Thumbnails`

#### Input Parameters
* `picture_id` - _required_ - The ID of the picture.
* `video_id` - _required_ - The ID of the video.

### Get a video thumbnail

*Tags:* `Videos\Thumbnails`

#### Input Parameters
* `picture_id` - _required_ - The ID of the picture.
* `video_id` - _required_ - The ID of the video.

### Edit a video thumbnail

*Tags:* `Videos\Thumbnails`

#### Input Parameters
* `picture_id` - _required_ - The ID of the picture.
* `video_id` - _required_ - The ID of the video.

### Remove an embed preset from a video

*Tags:* `Embed Presets\Videos`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.
* `video_id` - _required_ - The ID of the video.

### Check if an embed preset has been added to a video

*Tags:* `Embed Presets\Videos`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.
* `video_id` - _required_ - The ID of the video.

### Add an embed preset to a video

*Tags:* `Embed Presets\Videos`

#### Input Parameters
* `preset_id` - _required_ - The ID of the preset.
* `video_id` - _required_ - The ID of the video.

### Get all the domains on which a video can be embedded

*Tags:* `Videos\Embed Privacy`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Restrict a video from being embedded on a domain

*Tags:* `Videos\Embed Privacy`

#### Input Parameters
* `domain` - _required_ - The domain name.
* `video_id` - _required_ - The ID of the video.

### Permit a video to be embedded on a domain

> If domain privacy is enabled for this video, this method permits the video to be embedded on the specified domain.

*Tags:* `Videos\Embed Privacy`

#### Input Parameters
* `domain` - _required_ - The domain name.
* `video_id` - _required_ - The ID of the video.

### Get all the users who can view a user's private videos by default

*Tags:* `Videos\Viewing Privacy`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

### Permit a list of users to view a private video

> The body of this request should follow our<br/>
> [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain<br/>
> a single `URI` field, and the value of this field must be the URI of the user who can view this video.

*Tags:* `Videos\Viewing Privacy`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Restrict a user from viewing a private video

*Tags:* `Videos\Viewing Privacy`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Permit a specific user to view a private video

*Tags:* `Videos\Viewing Privacy`

#### Input Parameters
* `user_id` - _required_ - The ID of the user.
* `video_id` - _required_ - The ID of the video.

### Get all the tags of a video

*Tags:* `Videos\Tags`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Add a list of tags to a video

*Tags:* `Videos\Tags`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Remove a tag from a video

*Tags:* `Videos\Tags`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `word` - _required_ - The tag word.

### Check if a tag has been added to a video

*Tags:* `Videos\Tags`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `word` - _required_ - The tag word.

### Add a specific tag to a video

*Tags:* `Videos\Tags`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `word` - _required_ - The tag word.

### Get all the text tracks of a video

*Tags:* `Videos\Text Tracks`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Add a text track to a video

> For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).

*Tags:* `Videos\Text Tracks`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Delete a text track

*Tags:* `Videos\Text Tracks`

#### Input Parameters
* `texttrack_id` - _required_ - The ID of the text track.
* `video_id` - _required_ - The ID of the video.

### Get a specific text track

*Tags:* `Videos\Text Tracks`

#### Input Parameters
* `texttrack_id` - _required_ - The ID of the text track.
* `video_id` - _required_ - The ID of the video.

### Edit a text track

*Tags:* `Videos\Text Tracks`

#### Input Parameters
* `texttrack_id` - _required_ - The ID of the text track.
* `video_id` - _required_ - The ID of the video.

### Add a new custom logo to a video

*Tags:* `Embed Presets\Videos`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get a custom video logo

*Tags:* `Embed Presets\Videos`

#### Input Parameters
* `thumbnail_id` - _required_ - The ID of the picture.
* `video_id` - _required_ - The ID of the video.

### Add a version to a video

*Tags:* `Videos\Versions`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.

### Get all the related videos of a video

*Tags:* `Videos\Recommendations`

#### Input Parameters
* `video_id` - _required_ - The ID of the video.
* `filter` - _optional_ - The attribute by which to filter the results.
    Possible values: related.
* `page` - _optional_ - The page number of the results to show.
* `per_page` - _optional_ - The number of items to show on each page of results, up to a maximum of 100.

## License

**flow**ground :- Telekom iPaaS / vimeo-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
