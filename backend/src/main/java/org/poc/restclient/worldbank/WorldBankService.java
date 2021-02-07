package org.poc.restclient.worldbank;

import jdk.jfr.Description;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/country")
@RegisterRestClient
public interface WorldBankService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{cod_pais}/indicator/SI.POV.DDAY")
    @Description(WorldBankConstant.API_INFO_WORLD_BANK)
    public List<Object> findByCdPaisPaginator(@PathParam("cod_pais") String codPais, @QueryParam("page") String page, @QueryParam("per_page") String perPage, @QueryParam("format") String format);

}
