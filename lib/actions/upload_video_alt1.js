/**
 * Auto-generated action file for "Vimeo" API.
 *
 * Generated at: 2019-05-07T14:44:41.156Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / vimeo-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'upload_video_alt1'
 * Endpoint Path: '/me/videos'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "content_rating": "content_rating",
    "description": "description",
    "embed": "embed",
    "fullscreen": "fullscreen",
    "hd": "hd",
    "like": "like",
    "scaling": "scaling",
    "share": "share",
    "watchlater": "watchlater",
    "buttons": "buttons",
    "color": "color",
    "active": "active",
    "link": "link",
    "sticky": "sticky",
    "custom": "custom",
    "vimeo": "vimeo",
    "logos": "logos",
    "playbar": "playbar",
    "name": "name",
    "owner": "owner",
    "portrait": "portrait",
    "title": "title",
    "volume": "volume",
    "license": "license",
    "locale": "locale",
    "password": "password",
    "add": "add",
    "comments": "comments",
    "download": "download",
    "view": "view",
    "privacy": "privacy",
    "reason": "reason",
    "mpaa": "mpaa",
    "tv": "tv",
    "ratings": "ratings",
    "review_page": "review_page",
    "director_timeline": "director_timeline",
    "field_of_view": "field_of_view",
    "projection": "projection",
    "stereo_format": "stereo_format",
    "spatial": "spatial",
    "approach": "approach",
    "redirect_url": "redirect_url",
    "size": "size",
    "upload": "upload",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/vnd.vimeo.video+json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['oauth2'] = {token: cfg['oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'upload_video_alt1',
        pathName: '/me/videos',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}