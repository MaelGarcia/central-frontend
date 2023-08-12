# Running Enketo for development

Enketo provides a web-based form submission UI, which is used in Conectados for previewing forms, collecting new Submissions through Public Access Links, and editing Submissions. It is not strictly required for running Conectados Frontend, but there are an increasing number of new features (including editing Submissions) that make use of Enketo. The following configuration is only for a development environment. The production Conectados stack already includes Enketo with no additional configuration.

Enketo runs as a Node.js server and caches intermediate representations of forms in Redis. Conectados Backend stores information for managing and launching Enketo forms from Conectados Frontend, so all three must be configured together.

- Clone [enketo-express](https://github.com/enketo/enketo-express) and read the [Manual Installation Instructions](https://github.com/enketo/enketo-express/blob/master/tutorials/00-getting-started.md#manually). Specifically:
    * Install Redis. (Node.js will already be installed to run Conectados Frontend and Backend.) Enketo will expect Redis on the default port of `6379`.
    * Install dependencies with `npm install`.
- Configure Enketo. A minimal `config/config.json` for Enketo looks like:

```
{
    "port": "8005",
    "linked form and data server": {
        "server url": "localhost:8989",
        "api key": "enketorules",
        "authentication": {
            "allow insecure transport": "true"
        }
    },
    "base path": "-",
    "query parameter to pass to submission": "st",
    "redis": {
        "cache": {
            "port": "6379"
        }
    }
}
```

- Configure Conectados Backend. Add the following to `config/default.json`.

```
    "enketo": {
      "url": "http://localhost:8005/-",
      "apiKey": "enketorules"
    },
```

- Run the Enketo server via `npm start` (from the [Enketo Documentation](https://github.com/enketo/enketo-express/blob/master/tutorials/00-getting-started.md#how-to-run)).

- There will be three services running:
    * Conectados Frontend (via Nginx) on port `8989`
    * Conectados Backend on port `8383`
    * Enketo server on port `8005`


### Notes on existing Central Frontend configuration
- The following lines have already been added to [`main.nginx.conf`](../main.nginx.conf). They create a reverse proxy for the Enketo server in the same way as the reverse proxy to the Conectados Backend server.

```
    location /- {
      proxy_pass http://localhost:8005/-;
      proxy_redirect off;
      proxy_set_header Host $host;
    }
```


### Notes on error messages

* Upon editing a Form Submission, especially if it is a form that existed before you set up Enketo, you may see this error `{"message":"The form you tried to access is not ready for web use yet. Please wait some time and try again.","code":409.11}` . This happens when the form has not yet been configured by the backend to work with Enketo and does not yet have an `enketoId` . One way to force Central Backend to create an `enketoId` is to create a Draft From the existing Form Definition and republish the Form.


