
package rest;

import java.text.SimpleDateFormat;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("footballclubs")
public class Football
{
    @GET
    @RolesAllowed("User")
    @Produces(MediaType.APPLICATION_JSON)
    public String getSomething(){
    return "[{\"name\":\"Liverpool\", \"url\":\"http://www.liverpoolfc.com\"},\n" +
    " {\"name\":\"Manchester United\",\"url\" : \"http://www.manutd.com/\"}]"; 
  }
}
