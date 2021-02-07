package org.poc.restclient.worldbank;

import jdk.jfr.Description;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/world-bank")
@Tag(name = "world-bank")
public class WorldBankResource {

    @Inject
    @RestClient
    WorldBankService worldBankService;

    @GET
    @Path("/{cod_pais}")
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(description = WorldBankConstant.GET_COD_PAIS)
    @Tag(name="world-bank")
    @APIResponse(responseCode = "404", description = WorldBankConstant.GET_COD_PAIS_STATUS_NOT_FOUND)
    @APIResponse(responseCode = "200", description = WorldBankConstant.GET_COD_PAIS_STATUS_OK)
    public Response findByCdPaisPaginator(@PathParam("cod_pais") String codPais, @QueryParam("page") String page, @QueryParam("per_page") String perPage, @QueryParam("format") String format)
    {
        this.checkParamsWorldBank(codPais, page, perPage, format);
        List<Object> callback = worldBankService.findByCdPaisPaginator(codPais, page, perPage, format);
        if(callback.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        if(callback.size() == 1) {
            return Response.status(Response.Status.NOT_FOUND).entity(WorldBankConstant.GET_COD_PAIS_STATUS_NOT_FOUND).build();
        }
        return Response.ok().entity(callback).build();
    }

    @Description(WorldBankConstant.DESCRIPTION_CHECK_PARAMS_NOT_NULL)
    public void checkParamsWorldBank(String codPais, String page, String perPage, String format) {
        if (codPais == null || page == null || perPage == null || format == null) {
            throw new WebApplicationException(
                    Response.status(Response.Status.BAD_REQUEST)
                            .entity(WorldBankConstant.PARAMS_REQUIRED)
                            .build()
            );
        }
    }
}
