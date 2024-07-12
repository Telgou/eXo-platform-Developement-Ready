package org.exoplatform.samples.birthday;

import org.exoplatform.commons.utils.ListAccess;
import org.exoplatform.services.log.ExoLogger;
import org.exoplatform.services.log.Log;
import org.exoplatform.services.rest.resource.ResourceContainer;
import org.exoplatform.social.core.identity.model.Identity;
import org.exoplatform.social.core.manager.IdentityManager;
import org.exoplatform.social.core.manager.RelationshipManager;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@Path("connections/birthday") //Access path to our REST service
public class MyConnectionsBirthdayRESTService implements ResourceContainer {
    // Logger for our class
    private static final Log LOG = ExoLogger.getLogger(MyConnectionsBirthdayRESTService.class);

    // Service used to load user identities
    private IdentityManager identityManager;

    //  Service used to manage relationships with other users
    private RelationshipManager relationshipManager;

    private static String BIRTHDAY_PROPERTY = "birthday";

    public MyConnectionsBirthdayRESTService(IdentityManager identityManager, RelationshipManager relationshipManager) {
        this.identityManager = identityManager;
        this.relationshipManager = relationshipManager;
    }

    @GET
    @RolesAllowed("users")
    public Response getMyConnectionsBirthday(@Context SecurityContext securityContext) {

        // Load current authenticated user
        String authenticatedUserName = securityContext.getUserPrincipal().getName();
        try {
            // Load the identity of the current user
            Identity authenticatedUser = identityManager.getOrCreateUserIdentity(authenticatedUserName);
            // Load list of people connected with him
            ListAccess<Identity> connections = relationshipManager.getConnections(authenticatedUser);
            Identity[] connectionsIdentities = connections.load(0, connections.getSize());

            // Create a JSON array that will be returned with the response
            JSONArray jsonArray = new JSONArray();
            for (Identity connection : connectionsIdentities) {
                JSONObject connectionJSON = new JSONObject();
                connectionJSON.put("userName", connection.getRemoteId());
                connectionJSON.put("fullName", connection.getProfile().getFullName());
                connectionJSON.put("avatar", connection.getProfile().getAvatarUrl());
                connectionJSON.put(BIRTHDAY_PROPERTY, connection.getProfile().getProperty(BIRTHDAY_PROPERTY));
                jsonArray.put(connectionJSON);
            }

            // If everything is OK, we return a HTTP 200 response with the Json array
            return Response.ok(jsonArray.toString()).build();
        } catch (Exception e) {
            // Something went wrong, an error is logged and a HTTP 500 error is returned
            LOG.error("Error getting user connections for {}", authenticatedUserName, e);
            return Response.serverError().build();
        }
    }
}
