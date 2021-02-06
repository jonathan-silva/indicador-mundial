package org.poc.restclient;

import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Contact;
import org.eclipse.microprofile.openapi.annotations.info.Info;

import javax.ws.rs.core.Application;

@OpenAPIDefinition(info = @Info(description = "EndPoint para índice historico mundial de pobreza.", title = "Indicador Mundial", version = "0.0.1", contact = @Contact(name = "Jonathan Silva", email = "jonathansilva.ti22@gmail.com")))
public class MainApplication extends Application {
}
