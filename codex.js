var localidadSelectGoblal
var subLocalidadSelectGlobal

const fecha = new Date();

let listaLocalidades= {         // Valores de lista de servicios, independiente de la localidad.
    g1:{
        Tv: 1000,

        Intv1: 1000,
        Intv2: 1000,
        Intv3: 1000,
        Intv4: 1000,
    },
    g2:{
        TvIntv1: 1000,
        TvIntv2: 1000,
        TvIntv3: 1000,
        TvIntv4: 1000,
        
        TelIntv1: 1000,
        TelIntv2: 1000,
        TelIntv3: 1000,
        TelIntv4: 1000,
    },
    g3:{
        TvTelIntv1: 1000,
        TvTelIntv2: 1000,
        TvTelIntv3: 1000,
        TvTelIntv4: 1000,
        PackGamer: 1000,
        PackGamerFo: 1000,
    },
    negocios:{
        PackNegocios120: 1000,
        PackNegocios150: 1000,
        PackNegocios250: 1000,
        PackNegociosLite150: 1000,
        PackNegociosLite250: 1000,
    },

    Premium:{
        HBO:{
            nameS:"HBO",
            tipo:"Premium principal",
            precio: 1000,
            proporcionalesSC:true,
            descuento:{
                des:50,
                time:3
            }
        },
        HD:{
            nameS:"Pack HD",
            tipo:"Premium principal",
            precio: 1000,
            proporcionalesSC:true,
            descuento:{
                des:50,
                time:3
            }
        },
        TF:{
            nameS:"Pack Todo Fútbol",
            tipo:"Premium principal",
            precio: 1000,
            proporcionalesSC:false,
            descuento:{
                des:50,
                time:3
            }
        },
        Adultos:{
            nameS:"Pack Adultos",
            tipo:"Premium secundario",
            precio: 1000,
            proporcionalesSC:true,
            descuento:{
                des:50,
                time:3
            }
        },
        Adrenalina:{
            nameS:"Adrenalina - Sports Network",
            tipo:"Premium secundario",
            precio: 1000,
            proporcionalesSC:true,
            descuento:{
                des:50,
                time:3
            }
        },
        Golden:{
            nameS:"Golden Premier",
            tipo:"Premium secundario",
            precio: 1000,
            proporcionalesSC:true,
            descuento:{
                des:50,
                time:3
            }
        }
    },

    wireless:{
        wifiPlus:5700,
    }
}

let localDescuentoGeneral={     // Variables a modificar cuando una localidad tiene mismo descuento de localidad en todos sus servicios
    Sfe:4,
    Resi:0,
    Posadas:0,
    ParaCorriPosaRes:0,
    CrespRaced:0,
    BarranSluis:0,
    SanMartin:10,
    Caba:7,
    CampanaSanpedro:5,
    ResistenciaRedCodificada:0,
}

let premiumLocalidades={
    SantaFe:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Parana:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Corrientes:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Resistencia:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Posadas:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    SantoTome:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Campana:{
        HBO:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Caba:{
        HBO:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    SanPedro:{
        HBO:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    SanMartin:{
        HBO:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    SauceViejo:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Coronda:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    MonteVera:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    BPaproski:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    AngelGallardo:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    CrespRaced:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Goya:{
        HBO:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:false,
            descuentoPrecioLista:68,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:false,
            descuentoPrecioLista:70,
        },
        Adrenalina:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    Barranqueras:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    SanLuisDelPalmar:{
        HBO:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:false,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    },
    ResistenciaRedCodificada:{
        HBO:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        HD:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        TF:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adultos:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Adrenalina:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        },
        Golden:{
            disponible:true,
            desDisponible:true,
            descuentoPrecioLista:0,
        }
    }
}

let coefiecientesDescuentos={      // Variales a modificar para localidad con diferentes descuentos de locilidad en serivicios
    Sfe:{
        g1:{
            Tv: localDescuentoGeneral.Sfe,

            Intv1: localDescuentoGeneral.Sfe,
            Intv2: localDescuentoGeneral.Sfe,
            Intv3: localDescuentoGeneral.Sfe,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.Sfe,
            TvIntv2: localDescuentoGeneral.Sfe,
            TvIntv3: localDescuentoGeneral.Sfe,
            
            TelIntv1: localDescuentoGeneral.Sfe,
            TelIntv2: localDescuentoGeneral.Sfe,
            TelIntv3: localDescuentoGeneral.Sfe,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.Sfe,
            TvTelIntv2: localDescuentoGeneral.Sfe,
            TvTelIntv3: localDescuentoGeneral.Sfe,
            PackGamer: localDescuentoGeneral.Sfe,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.Sfe,
            PackNegocios150: localDescuentoGeneral.Sfe,
            PackNegocios250: localDescuentoGeneral.Sfe,
            PackNegociosLite150: localDescuentoGeneral.Sfe,
            PackNegociosLite250: localDescuentoGeneral.Sfe,
        },
    },
    Resi:{
    g1:{
        Tv: localDescuentoGeneral.Resi,

        Intv1: localDescuentoGeneral.Resi,
        Intv2: localDescuentoGeneral.Resi,
        Intv3: localDescuentoGeneral.Resi,
    },
    g2:{
        TvIntv1: localDescuentoGeneral.Resi,
        TvIntv2: localDescuentoGeneral.Resi,
        TvIntv3: localDescuentoGeneral.Resi,
        
        TelIntv1: localDescuentoGeneral.Resi,
        TelIntv2: localDescuentoGeneral.Resi,
        TelIntv3: localDescuentoGeneral.Resi,
    },
    g3:{
        TvTelIntv1: localDescuentoGeneral.Resi,
        TvTelIntv2: localDescuentoGeneral.Resi,
        TvTelIntv3: localDescuentoGeneral.Resi,
        PackGamer: localDescuentoGeneral.Resi, 
    },
    negocios:{
        PackNegocios120: localDescuentoGeneral.Resi,
        PackNegocios150: localDescuentoGeneral.Resi,
        PackNegocios250: localDescuentoGeneral.Resi,
        PackNegociosLite150: localDescuentoGeneral.Resi,
        PackNegociosLite250: localDescuentoGeneral.Resi,
    },

    },
    Posadas:{
        g1:{
            Tv: localDescuentoGeneral.ParaCorriPosaRes,

            Intv1: localDescuentoGeneral.ParaCorriPosaRes,
            Intv2: localDescuentoGeneral.ParaCorriPosaRes,
            Intv3: localDescuentoGeneral.ParaCorriPosaRes,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.ParaCorriPosaRes,
            TvIntv2: localDescuentoGeneral.ParaCorriPosaRes,
            TvIntv3: localDescuentoGeneral.ParaCorriPosaRes,
            
            TelIntv1: localDescuentoGeneral.ParaCorriPosaRes,
            TelIntv2: localDescuentoGeneral.ParaCorriPosaRes,
            TelIntv3: localDescuentoGeneral.ParaCorriPosaRes,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.ParaCorriPosaRes,
            TvTelIntv2: localDescuentoGeneral.ParaCorriPosaRes,
            TvTelIntv3: localDescuentoGeneral.ParaCorriPosaRes,
            PackGamer: localDescuentoGeneral.ParaCorriPosaRes,
            PackGamerResistencia: localDescuentoGeneral.ParaCorriPosaRes,
            PackGamerFo: localDescuentoGeneral.ParaCorriPosaRes,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegocios150: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegocios250: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegociosLite150: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegociosLite250: localDescuentoGeneral.ParaCorriPosaRes,
        },
    },
    PosadasSinDescuentoLocalidad:{
        g1:{
            Tv: localDescuentoGeneral.Posadas,

            Intv1: localDescuentoGeneral.Posadas,
            Intv2: localDescuentoGeneral.Posadas,
            Intv3: localDescuentoGeneral.Posadas,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.Posadas,
            TvIntv2: localDescuentoGeneral.Posadas,
            TvIntv3: localDescuentoGeneral.Posadas,
            
            TelIntv1: localDescuentoGeneral.Posadas,
            TelIntv2: localDescuentoGeneral.Posadas,
            TelIntv3: localDescuentoGeneral.Posadas,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.Posadas,
            TvTelIntv2: localDescuentoGeneral.Posadas,
            TvTelIntv3: localDescuentoGeneral.Posadas,
            PackGamer: localDescuentoGeneral.Posadas,
            PackGamerResistencia: localDescuentoGeneral.Posadas,
            PackGamerFo: localDescuentoGeneral.Posadas,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.Posadas,
            PackNegocios150: localDescuentoGeneral.Posadas,
            PackNegocios250: localDescuentoGeneral.Posadas,
            PackNegociosLite150: localDescuentoGeneral.Posadas,
            PackNegociosLite250: localDescuentoGeneral.Posadas,
        },
    },
    ParaCorriPosaRes:{
        g1:{
            Tv: localDescuentoGeneral.ParaCorriPosaRes,

            Intv1: localDescuentoGeneral.ParaCorriPosaRes,
            Intv2: localDescuentoGeneral.ParaCorriPosaRes,
            Intv3: localDescuentoGeneral.ParaCorriPosaRes,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.ParaCorriPosaRes,
            TvIntv2: localDescuentoGeneral.ParaCorriPosaRes,
            TvIntv3: localDescuentoGeneral.ParaCorriPosaRes,
            
            TelIntv1: localDescuentoGeneral.ParaCorriPosaRes,
            TelIntv2: localDescuentoGeneral.ParaCorriPosaRes,
            TelIntv3: localDescuentoGeneral.ParaCorriPosaRes,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.ParaCorriPosaRes,
            TvTelIntv2: localDescuentoGeneral.ParaCorriPosaRes,
            TvTelIntv3: localDescuentoGeneral.ParaCorriPosaRes,
            PackGamer: localDescuentoGeneral.ParaCorriPosaRes,
            PackGamerResistencia: localDescuentoGeneral.ParaCorriPosaRes,
            PackGamerFo: localDescuentoGeneral.ParaCorriPosaRes,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegocios150: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegocios250: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegociosLite150: localDescuentoGeneral.ParaCorriPosaRes,
            PackNegociosLite250: localDescuentoGeneral.ParaCorriPosaRes,
        },
    },
    CrespRaced:{
        g1:{
            Tv: localDescuentoGeneral.CrespRaced,

            Intv1: localDescuentoGeneral.CrespRaced,
            Intv2: localDescuentoGeneral.CrespRaced,
            Intv3: localDescuentoGeneral.CrespRaced,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.CrespRaced,
            TvIntv2: localDescuentoGeneral.CrespRaced,
            TvIntv3: localDescuentoGeneral.CrespRaced,
            
            TelIntv1: localDescuentoGeneral.CrespRaced,
            TelIntv2: localDescuentoGeneral.CrespRaced,
            TelIntv3: localDescuentoGeneral.CrespRaced,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.CrespRaced,
            TvTelIntv2: localDescuentoGeneral.CrespRaced,
            TvTelIntv3: localDescuentoGeneral.CrespRaced,
            PackGamer: localDescuentoGeneral.CrespRaced,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.CrespRaced,
            PackNegocios150: localDescuentoGeneral.CrespRaced,
            PackNegocios250: localDescuentoGeneral.CrespRaced,
            PackNegociosLite150: localDescuentoGeneral.CrespRaced,
            PackNegociosLite250: localDescuentoGeneral.CrespRaced,
        },
    },
    BarranSluis:{
        g1:{
            Tv: localDescuentoGeneral.BarranSluis,

            Intv1: localDescuentoGeneral.BarranSluis,
            Intv2: localDescuentoGeneral.BarranSluis,
            Intv3: localDescuentoGeneral.BarranSluis,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.BarranSluis,
            TvIntv2: localDescuentoGeneral.BarranSluis,
            TvIntv3: localDescuentoGeneral.BarranSluis,
            
            TelIntv1: localDescuentoGeneral.BarranSluis,
            TelIntv2: localDescuentoGeneral.BarranSluis,
            TelIntv3: localDescuentoGeneral.BarranSluis,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.BarranSluis,
            TvTelIntv2: localDescuentoGeneral.BarranSluis,
            TvTelIntv3: localDescuentoGeneral.BarranSluis,
            PackGamer: localDescuentoGeneral.BarranSluis,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.BarranSluis,
            PackNegocios150: localDescuentoGeneral.BarranSluis,
            PackNegocios250: localDescuentoGeneral.BarranSluis,
            PackNegociosLite150: localDescuentoGeneral.BarranSluis,
            PackNegociosLite250: localDescuentoGeneral.BarranSluis,
        },

    },
    SanMartin:{
        g1:{
            Tv: localDescuentoGeneral.SanMartin,

            Intv1: localDescuentoGeneral.SanMartin,
            Intv2: localDescuentoGeneral.SanMartin,
            Intv3: localDescuentoGeneral.SanMartin,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.SanMartin,
            TvIntv2: localDescuentoGeneral.SanMartin,
            TvIntv3: localDescuentoGeneral.SanMartin,
            
            TelIntv1: localDescuentoGeneral.SanMartin,
            TelIntv2: localDescuentoGeneral.SanMartin,
            TelIntv3: localDescuentoGeneral.SanMartin,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.SanMartin,
            TvTelIntv2: localDescuentoGeneral.SanMartin,
            TvTelIntv3: localDescuentoGeneral.SanMartin,
            PackGamer: localDescuentoGeneral.SanMartin,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.SanMartin,
            PackNegocios150: localDescuentoGeneral.SanMartin,
            PackNegocios250: localDescuentoGeneral.SanMartin,
            PackNegociosLite150: localDescuentoGeneral.SanMartin,
            PackNegociosLite250: localDescuentoGeneral.SanMartin,
        },
    },

    CorondaSauceRincon:{
        g1:{
            Tv: 50,

            Intv1: 45,
            Intv2: 45,
            Intv3: 45,
        },
        g2:{
            TvIntv1: 45,
            TvIntv2: 45,
            TvIntv3: 45,
            
            TelIntv1: 45,
            TelIntv2: 45,
            TelIntv3: 45,
        },
        g3:{
            TvTelIntv1: 45,
            TvTelIntv2: 45,
            TvTelIntv3: 40,
            PackGamer: 40,
        },
        negocios:{
            PackNegocios120: 40,
            PackNegocios150: 40,
            PackNegocios250: 40,
            PackNegociosLite150: 40,
            PackNegociosLite250: 40,
        },
    },
    MonteveraGallardo:{
        g1:{
            Tv: 50,

            Intv1: 50,
            Intv2: 45,
            Intv3: 45,
        },
        g2:{
            TvIntv1: 50,
            TvIntv2: 45,
            TvIntv3: 45,
            
            TelIntv1: 45,
            TelIntv2: 45,
            TelIntv3: 45,
        },
        g3:{
            TvTelIntv1: 47.6,
            TvTelIntv2: 40,
            TvTelIntv3: 40,
            PackGamer: 40,
        },
        negocios:{
            PackNegocios120: 40,
            PackNegocios150: 40,
            PackNegocios250: 40,
            PackNegociosLite150: 40,
            PackNegociosLite250: 40,
        },
    },
    Goya:{
        g1:{
            Tv: 33,

            Intv1: 7,
            Intv2: 15,
            Intv3: 15,
        },
        g2:{
            TvIntv1: 12,
            TvIntv2: 15,
            TvIntv3: 15,
            
            TelIntv1: 45,
            TelIntv2: 45,
            TelIntv3: 45,
        },
        g3:{
            TvTelIntv1: 15,
            TvTelIntv2: 15,
            TvTelIntv3: 15,
            PackGamer: 40,
        },
        negocios:{
            PackNegocios120: 10,
            PackNegocios150: 10,
            PackNegocios250: 10,
            PackNegociosLite150: 10,
            PackNegociosLite250: 10,
        },
    },
    Caba:{
        g1:{
            Tv: localDescuentoGeneral.Caba,

            Intv1: localDescuentoGeneral.Caba,
            Intv2: localDescuentoGeneral.Caba,
            Intv3: 43.2,
            Intv4: localDescuentoGeneral.Caba,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.Caba,
            TvIntv2: localDescuentoGeneral.Caba,
            TvIntv3: 42.6,
            TvIntv4: localDescuentoGeneral.Caba,
            
            TelIntv1: localDescuentoGeneral.Caba,
            TelIntv2: localDescuentoGeneral.Caba,
            TelIntv3: 43.1,
            TelIntv4: localDescuentoGeneral.Caba,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.Caba,
            TvTelIntv2: localDescuentoGeneral.Caba,
            TvTelIntv3: 40.7,
            TvTelIntv4: localDescuentoGeneral.Caba,
            PackGamer: localDescuentoGeneral.Caba,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.Caba,
            PackNegocios150: localDescuentoGeneral.Caba,
            PackNegocios250: localDescuentoGeneral.Caba,
            PackNegociosLite150: localDescuentoGeneral.Caba,
            PackNegociosLite250: localDescuentoGeneral.Caba,
        },
    },
    CampanaSanpedro:{
        g1:{
            Tv: localDescuentoGeneral.CampanaSanpedro,

            Intv1: localDescuentoGeneral.CampanaSanpedro,
            Intv2: localDescuentoGeneral.CampanaSanpedro,
            Intv3: localDescuentoGeneral.CampanaSanpedro,
            Intv4: localDescuentoGeneral.CampanaSanpedro,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.CampanaSanpedro,
            TvIntv2: localDescuentoGeneral.CampanaSanpedro,
            TvIntv3: localDescuentoGeneral.CampanaSanpedro,
            TvIntv4: localDescuentoGeneral.CampanaSanpedro,
            
            TelIntv1: localDescuentoGeneral.CampanaSanpedro,
            TelIntv2: localDescuentoGeneral.CampanaSanpedro,
            TelIntv3: localDescuentoGeneral.CampanaSanpedro,
            TelIntv4: localDescuentoGeneral.CampanaSanpedro,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.CampanaSanpedro,
            TvTelIntv2: localDescuentoGeneral.CampanaSanpedro,
            TvTelIntv3: localDescuentoGeneral.CampanaSanpedro,
            TvTelIntv4: localDescuentoGeneral.CampanaSanpedro,
            PackGamer: localDescuentoGeneral.CampanaSanpedro,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.CampanaSanpedro,
            PackNegocios150: localDescuentoGeneral.CampanaSanpedro,
            PackNegocios250: localDescuentoGeneral.CampanaSanpedro,
            PackNegociosLite150: localDescuentoGeneral.CampanaSanpedro,
            PackNegociosLite250: localDescuentoGeneral.CampanaSanpedro,
        },
    },
    SantoTome:{
        g1:{
            Tv: 33,

            Intv1: 61,
            Intv2: 51,
            Intv3: 51,
        },
        g2:{
            TvIntv1: 58.5,
            TvIntv2: 48.5,
            TvIntv3: 48.5,
            
            TelIntv1: 45,
            TelIntv2: 45,
            TelIntv3: 45,
        },
        g3:{
            TvTelIntv1: 58.5,
            TvTelIntv2: 43.5,
            TvTelIntv3: 43.5,
            PackGamer: 48.5,
        },
        negocios:{
            PackNegocios120: 48.5,
            PackNegocios150: 48.5,
            PackNegocios250: 48.5,
            PackNegociosLite150: 48.5,
            PackNegociosLite250: 48.5,
        },
        wireless:{
            wifiPlus:0
        },
    },
    ResistenciaRedCodificada:{
        g1:{
            Tv: localDescuentoGeneral.ResistenciaRedCodificada,

            Intv1: localDescuentoGeneral.ResistenciaRedCodificada,
            Intv2: localDescuentoGeneral.ResistenciaRedCodificada,
            Intv3: localDescuentoGeneral.ResistenciaRedCodificada,
        },
        g2:{
            TvIntv1: localDescuentoGeneral.ResistenciaRedCodificada,
            TvIntv2: localDescuentoGeneral.ResistenciaRedCodificada,
            TvIntv3: localDescuentoGeneral.ResistenciaRedCodificada,
            
            TelIntv1: localDescuentoGeneral.ResistenciaRedCodificada,
            TelIntv2: localDescuentoGeneral.ResistenciaRedCodificada,
            TelIntv3: localDescuentoGeneral.ResistenciaRedCodificada,
        },
        g3:{
            TvTelIntv1: localDescuentoGeneral.ResistenciaRedCodificada,
            TvTelIntv2: localDescuentoGeneral.ResistenciaRedCodificada,
            TvTelIntv3: localDescuentoGeneral.ResistenciaRedCodificada,
            PackGamer: localDescuentoGeneral.ResistenciaRedCodificada,
            PackGamerResistencia: localDescuentoGeneral.ResistenciaRedCodificada,
        },
        negocios:{
            PackNegocios120: localDescuentoGeneral.ResistenciaRedCodificada,
            PackNegocios150: localDescuentoGeneral.ResistenciaRedCodificada,
            PackNegocios250: localDescuentoGeneral.ResistenciaRedCodificada,
            PackNegociosLite150: localDescuentoGeneral.ResistenciaRedCodificada,
            PackNegociosLite250: localDescuentoGeneral.ResistenciaRedCodificada,
        },
    }
}


let retencionNormal = [10,20,30];

let upgradeNormal = {
    des:30,
    duration:[6,12],
    condition:["Contado","DA"]
}

let listaCostoAdicional={
    intalacionG1Tv:{
        nameS: "Instalación TV (G1)",
        precio: 1000,
        tipo: "TV"
    },
    bocaTv:{
        nameS: "Boca Adicional TV",
        precio: 1000,
        tipo: "TV"
    },
    PackPlus:{
        nameS: "Pack Plus (1° sin cargo)",
        precio: 1000,
        tipo: "TV"
    },
    PackPlusIntalacion:{
        nameS: "Pack Plus (Si van a intalarlo)",
        precio: 1000,
        tipo: "TV"
    },
    intalacionStb:{
        nameS: "Instalación STB (1 pago)",
        precio: 1000,
        tipo:"STB"
    },
    intalacionStbCuotas:{
        nameS: "Instalación STB (1/3)",
        precio: 1000,
        tipo:"STB"
    },
    mantenimientoStb:{
        nameS: "Mantenimiento STB (A partir del 2°)",
        precio: 1000,
        tipo:"STB"
    },
    intalacionTvBox:{
        nameS: "Instalación TV box",
        precio: 1000,
        tipo: "TV Box"
    },
    intalacionTvBoxCuotas:{
        nameS: "Instalación TV box (1/3)",
        precio: 1000,
        tipo: "TV Box"
    },

    serviceCC:{
        nameS: "Service con Cargo (HFC/FO)",
        precio: 1000,
        tipo: "Modificaciones y Service"
    },
    modificacionIntalacionCoaxil:{
        nameS: "Modificación Instalación CM/TV",
        precio: 1000,
        tipo: "Modificaciones y Service"
    },
    modificacionIntalacionFO:{
        nameS: "Modificación Instalación ONU",
        precio: 1000,
        tipo: "Modificaciones y Service"
    },
    reconexionHfc:{
        nameS: "Reconexión HFC (Moroso)",
        precio: 1000,
        tipo: "Modificaciones y Service"
    },
    reconexionFo:{
        nameS: "Reconexión FO (Moroso)",
        precio: 3255,
        tipo: "Modificaciones y Service"
    },
    cambioDomicilio:{
        nameS: "Cambio de domicilio",
        precio: 1000,
        tipo: "Modificaciones y Service"
    },
    altaSegundaLinea:{
        nameS: "Alta 2° Linea Telfonica (cambio de CM a 2 puertos)",
        precio: 1000,
        tipo: "Telefonía"
    },
    altaSegundaLineaSinCambio:{
        nameS: "Alta 2° Linea Telfonica (CM con 2 puertos)",
        precio: 1000,
        tipo: "Telefonía"
    },
    modificacionNumeroTelefonico:{
        nameS: "Modificación N° Telefóncio",
        precio: 1000,
        tipo: "Telefonía"
    },
    adicionalComercio:{
        nameS: "Adicional Comercio (Mensual)",
        precio: 1000,
        tipo: "Telefonía"
    },
    segundoCm:{
        nameS: "2° CM",
        precio: 1000,
        tipo: "Internet"
    },
    segundoCmCuotas:{
        nameS: "2° CM (1/3)",
        precio: 1000,
        tipo: "Internet"
    },
    ampliWifi:{
        nameS: "Amplificador Wifi",
        precio: 1000,
        tipo: "Internet"
    },
    ampliWifiCuotas:{
        nameS: "Amplificador Wifi (1/3)",
        precio: 1000,
        tipo: "Internet"
    },
    routerDobleBanda:{
        nameS: "Router Dobre Banda (Solo resistencia y Sta. Fe)",
        precio: 1000,
        tipo: "Internet"
    },
    routerDobleBandaCuotas:{
        nameS: "Router Dobre Banda (Solo resistencia y Sta. Fe, 1/3)",
        precio: 1000,
        tipo: "Internet"
    },
    mantenimientoGigacamIn:{
        nameS: "Mantenimiento Gigacam Indoor",
        precio: 1000,
        tipo:"Gigacam Mantenimiento"
    },
    mantenimientoGigacamIn2:{
        nameS: "Mantenimiento Gigacam Indoor Pack X2",
        precio: 1000,
        tipo:"Gigacam Mantenimiento"
    },
    mantenimientoGigacamIn3:{
        nameS: "Mantenimiento Gigacam Indoor Pack X3",
        precio: 1000,
        tipo:"Gigacam Mantenimiento"
    },
    mantenimientoGigacamOut:{
        nameS: "Mantenimiento Gigacam Outdoor",
        precio: 1000,
        tipo:"Gigacam Mantenimiento"
    },


    intalacionGigacamIn:{
        nameS: "Instalación Gigacam Indoor",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },
    intalacionGigacamInCuotas:{
        nameS: "Instalación Gigacam Indoor (1/3)",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },
    intalacionGigacamIn2:{
        nameS: "Instalación Gigacam Indoor Pack X2",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },
    intalacionGigacamIn2Cuotas:{
        nameS: "Instalación Gigacam Indoor Pack X2 (1/3)",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },
    intalacionGigacamIn3:{
        nameS: "Instalación Gigacam Indoor Pack X3",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },
    intalacionGigacamIn3Cuotas:{
        nameS: "Instalación Gigacam Indoor Pack X3 (1/3)",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },
    intalacionGigacamOut:{
        nameS: "Instalación Gigacam Outdoor",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },
    intalacionGigacamOutCuotas:{
        nameS: "Instalación Gigacam Outdoor (1/3)",
        precio: 1000,
        tipo:"Gigacam Instalación"
    },



}

let serviciosVelocidades ={
    v1:"50MB",
    v2:"100MB",
    v3:"200MB",
    v4:"500MB",

    packGamer:"Pack Gamer"
}

let datosPermanencia={
    intervalo1:{
        inicio: new Date ("2022/03/04"),
        fin: new Date ("2022/05/31"),
        price: 1000
    },
    intervalo2:{
        inicio: new Date ("2022/06/01"),
        fin: new Date ("2022/08/31"),
        price: 1000
    },
    intervalo3:{
        inicio: new Date ("2022/09/01"),
        fin: new Date ("2023/01/31"),
        price: 1000
    },
    intervalo4:{
        inicio: new Date ("2023/02/01"),
        fin: new Date ("2023/03/31"),
        price: 1000
    },
    intervalo5:{
        inicio: new Date ("2023/04/01"),
        fin: new Date ("2023/04/30"),
        price: 1000
    },
    intervalo6:{
        inicio: new Date ("2023/05/01"),
        fin: new Date ("2023/05/31"),
        price: 1000
    },
    intervalo7:{
        inicio: new Date ("2023/06/01"),
        fin: new Date ("2023/06/30"),
        price: 1000
    },
    intervalo8:{
        inicio: new Date ("2023/07/01"),
        fin: fecha,
        price: 1000
    },
    
}

const linksGiganet={
    queIncluyeCaptacion:{
        Tv: "http://giganet/?q=node/1954",
        Internet: "http://giganet/?q=node/2753",
        TvInternet: "http://giganet/?q=node/1958",
        TvInternetTel: "http://giganet/?q=node/2486",
        PackNegocios: "http://giganet/?q=node/2341",
    },
    premiums:{
        HD: "http://giganet/?q=node/1963",
        HBO: "http://giganet/?q=node/1966",
        TF:"http://giganet/?q=node/1973",
        Adultos: "http://giganet/?q=node/1967", 
        Adrenalina: "http://giganet/?q=node/1967", 
        Golden: "http://giganet/?q=node/1967", 
    }
}

const gigacamDatos={
    gigacamIn:{
        nameS: "Gigacam Indoor",
        mantenimiento: listaCostoAdicional.mantenimientoGigacamIn.precio,
        instalacion: listaCostoAdicional.intalacionGigacamIn.precio,
        cuotas: listaCostoAdicional.intalacionGigacamInCuotas.precio,
        linkGiganet: "http://giganet.gigared/?q=node/3031"
    },
    gigacamIn2:{
        nameS: "Gigacam Indoor Pack X2",
        mantenimiento: listaCostoAdicional.mantenimientoGigacamIn2.precio,
        instalacion: listaCostoAdicional.intalacionGigacamIn2.precio,
        cuotas: listaCostoAdicional.intalacionGigacamIn2Cuotas.precio,
        linkGiganet: "http://giganet.gigared/?q=node/3031"
    },
    gigacamIn3:{
        nameS: "Gigacam Indoor Pack X3",
        mantenimiento: listaCostoAdicional.mantenimientoGigacamIn3.precio,
        instalacion: listaCostoAdicional.intalacionGigacamIn3.precio,
        cuotas: listaCostoAdicional.intalacionGigacamIn3Cuotas.precio,
        linkGiganet: "http://giganet.gigared/?q=node/3031"
    },
    gigacamOut:{
        nameS: "Gigacam Outdoor",
        mantenimiento: listaCostoAdicional.mantenimientoGigacamOut.precio,
        instalacion: listaCostoAdicional.intalacionGigacamOut.precio,
        cuotas: listaCostoAdicional.intalacionGigacamOutCuotas.precio,
        linkGiganet: "http://giganet.gigared/?q=node/3031"
    }
}

function localidad(){
    deleteSelectorServicio();
    createTableSpliter();
    createSelectorServicio(selectorLocalidad(true));
}

function createSelectorServicio(dataLocal){
    let statusUpgrade = document.querySelector("#upgrade").checked
    let localidadSelect = document.getElementById("localidad").value;
    
    if (localidadSelect!="Seleccione localidad"){
        let oldSelectServicio = document.querySelector("#servicio")
        if(oldSelectServicio!=undefined){
            document.querySelector("#selectores").removeChild(oldSelectServicio);
        }
        let newSelectServicio = document.createElement("select");
        newSelectServicio.setAttribute("id","servicio");
        newSelectServicio.setAttribute("onchange","createSelectorVel(selectorLocalidad(true));")

        let dss = document.createElement("option");
        dss.text = "Seleccione servicio";
        dss.setAttribute("selected","");
        dss.setAttribute("disabled","");
        newSelectServicio.appendChild(dss);

        for(iS=0;iS<Object.keys(dataLocal).length;iS++){
            let data = dataLocal[Object.keys(dataLocal)[iS]]
            if(statusUpgrade){
                if(data.promoUpgrade==true){
                    opcionesSelectorServicio(data,newSelectServicio);
                }

            }
            else{
                opcionesSelectorServicio(data,newSelectServicio);
            }
        }

        document.querySelector("#selectores").appendChild(newSelectServicio);
    }
}

function premium(localidad){
    let status = document.getElementById("captacion").checked
    let tabla = document.getElementById("tabla");
    let tBody = document.querySelector("#tBody")
    let filaPremium = document.createElement("tr");
    filaPremium.setAttribute("class","filaPremium");
    let filas = tabla.childNodes;
    let filaCuerpo = document.querySelectorAll(".filaCuerpo");
    if(filaCuerpo.length==1){                    // Evita que se ejecute si hay más de una fila cuerpo
        if(filtroPremiumTv(filaCuerpo[0])==true){
            
            let cellService = document.createElement("td");
            cellService.setAttribute("class","primeraCelda")
            let selectService = document.createElement("select");
            selectService.setAttribute("id","selectServicePremium");
            selectService.setAttribute("onchange","tablaPremium(this)");
            let def = document.createElement("option");
            def.text = "Seleccione servicio adicional";
            def.setAttribute("selected","");
            def.setAttribute("disabled","");
            selectService.appendChild(def);

                cellService.appendChild(selectService);
                filaPremium.setAttribute("class","filaPremium");
                filaPremium.append(cellService)
                tBody.appendChild(filaPremium);


            let validacion = false
            let nFilaPremium = document.querySelectorAll(".filaPremium").length

            for ( let key in listaLocalidades.Premium){
                let servicioPremium = listaLocalidades.Premium[key]
                if(premiumLocalidades[subLocalidadSelectGlobal][key].disponible==true){

                    if(filtroPremium(servicioPremium)==true){
                        validacion = true
                        let tipoPremium = servicioPremium.tipo

                        let a = "label_"+tipoPremium.replace(/ /g,'')+nFilaPremium
                        let label = document.querySelector("#"+a)

                        if(label==undefined){
                            let label = document.createElement("optgroup");
                            label.setAttribute("id","label_"+tipoPremium.replace(/ /g,'')+nFilaPremium);
                            label.setAttribute("label",tipoPremium.toUpperCase());

                            selectService.appendChild(label)
                            let option = document.createElement("option");
                            option.setAttribute("value",key);
                            option.textContent = servicioPremium.nameS;
                            label.appendChild(option);
                        }
                        else{
                            let option = document.createElement("option");
                            option.setAttribute("value",key);
                            option.textContent = servicioPremium.nameS;
                            label.appendChild(option);

                        }

                    }
                }
            }
            if(validacion==true){
                cellService.appendChild(selectService);
            
            
                let cellPrecioLista = document.createElement("td");
            
                let cellPromo = document.createElement("td");
            
                let cellFinal = document.createElement("td");
            
            
                filaPremium.appendChild(cellService);
                filaPremium.appendChild(cellPrecioLista);
                filaPremium.setAttribute("class","filaPremium");
                if(status==false){
                    var cellVigencia = document.createElement("td");
                    cellVigencia.textContent = "-";
                    filaPremium.appendChild(cellVigencia);
                }
                filaPremium.appendChild(cellPromo);
                filaPremium.appendChild(cellFinal);
            
                tBody.appendChild(filaPremium);

            }
            else{
                tBody.removeChild(filaPremium);
                let url = "http://giganet.gigared/?q=node/1969"
                if(window.confirm("En esta localidad no está habilitada la comercialización de packs Premium. Puede agregar únicamente servicios Premium Play (Revisar en Giganet)")){
                    window.open(url)
                }
            }
        }
        else{
            let url = "http://giganet.gigared/?q=node/1969"
            if(window.confirm("Para agregar un servicio Premium debe tener TV contratada en el pack básico. Puede agregar únicamente servicios Premium Play (Revisar en Giganet)")){
                window.open(url)
            }
        }
    }
    else{
        mostrarRed("Seleccione un servicio básico")
        // alert("Seleccione un servicio básico");
    }
    if(localidadSelectGoblal=="Goya"&&document.querySelectorAll(".filaPremium").length<2){
        mostrarGreen("Goya tiene bonificada la instalación de STB contratando pack Todo Fútbol",1500)
        // alert("Goya tiene bonificada la instalación de STB contratando pack Todo Fútbol")
    }
}

function encabezado(){
    let statusRetencion = document.getElementById("retencion").checked
    let statusCaptacion = document.getElementById("captacion").checked
    let statusUpgrade = document.getElementById("upgrade").checked

    if(statusRetencion==true){
                
        var filaHeader = document.createElement("tr");

        var servicioHeader = document.createElement("th");
        servicioHeader.textContent = "Opción"


        var precioHeader = document.createElement("th");
        precioHeader.setAttribute("onclick","precioDeLista()");
        precioHeader.setAttribute("id","botonPrecioLista")
        precioHeader.textContent = "Precio Lista";

        var vigenciaHeader = document.createElement("th");
        vigenciaHeader.textContent = "vigencia";
        
        var promoHeader = document.createElement("th");
        promoHeader.textContent = "Promoción";
        
        var finalHeader = document.createElement("th");
        finalHeader.textContent = "Precio Final";

        
        filaHeader.appendChild(servicioHeader);
        filaHeader.appendChild(precioHeader);
        filaHeader.appendChild(vigenciaHeader);
        filaHeader.appendChild(promoHeader);
        filaHeader.appendChild(finalHeader);



        return filaHeader

    }
    else if(statusCaptacion==true){
        var filaHeader = document.createElement("tr");

        var servicioHeader = document.createElement("th");
        servicioHeader.textContent = "Servicio";

        var precioHeader = document.createElement("th");
        precioHeader.setAttribute("onclick","precioDeLista()");
        precioHeader.setAttribute("id","botonPrecioLista")
        precioHeader.textContent = "Precio Lista";
        
        var promoHeader = document.createElement("th");
        promoHeader.textContent = "Promoción";
        
        var finalHeader = document.createElement("th");
        finalHeader.textContent = "Precio Final";


        filaHeader.appendChild(servicioHeader);
        filaHeader.appendChild(precioHeader);
        filaHeader.appendChild(promoHeader);
        filaHeader.appendChild(finalHeader);

        return filaHeader
    }
    else if(statusUpgrade==true){
                       
        var filaHeader = document.createElement("tr");

        var servicioHeader = document.createElement("th");
        servicioHeader.textContent = "Servicio"


        var precioHeader = document.createElement("th");
        precioHeader.setAttribute("onclick","precioDeLista()");
        precioHeader.setAttribute("id","botonPrecioLista")
        precioHeader.textContent = "Precio Lista";
        
        var promoHeader = document.createElement("th");
        promoHeader.textContent = "Promoción";
        
        var finalHeader = document.createElement("th");
        finalHeader.textContent = "Precio Final";

        
        filaHeader.appendChild(servicioHeader);
        filaHeader.appendChild(precioHeader);
        filaHeader.appendChild(promoHeader);
        filaHeader.appendChild(finalHeader);



        return filaHeader 
    }
}

function encabezadoLocalidad(){
    let statusCaptacion = document.querySelector("#captacion").checked
    let statusRetencion = document.querySelector("#retencion").checked
    let statusUpgrade = document.querySelector("#upgrade").checked
    let localidadesHeader
    let giganet
    let localidadSelect = document.getElementById("localidad").value
    
    switch (localidadSelect) {
        case ("001"):
                localidadesHeader = "Santa Fe"
                giganet = "http://giganet.gigared/?q=node/3320#overlay-context="
            break;
        case ("002"):
        case ("003"):
        
                localidadesHeader = "Parana - Corrientes"
                giganet = "http://giganet/?q=node/1955"
            break;
        case ("005"):
            localidadesHeader = "Posadas"
            giganet = "http://giganet.gigared/?q=node/3355"
            break;
        case ("004"):
                localidadesHeader = "Resistencia"
                giganet = "http://giganet/?q=node/3348"
            break;
        case ("Santo Tomé"):
                localidadesHeader = "Santo Tomé"
                giganet = "http://giganet/?q=node/1980"
            break;
        case ("103"):
        case ("105"):
                localidadesHeader = "Campana - San Pedro"
                giganet = "http://giganet.gigared/?q=node/2070"
            break;
        case ("100"):
            localidadesHeader = "CABA"
            giganet = "http://giganet.gigared/?q=node/3356"
            break
        case ("102"):
                localidadesHeader = "San Martín"
                giganet = "http://giganet.gigared/?q=node/1953"
            break;
        case ("Sauce Viejo"):
        case ("Rincon"):
        case ("104"):
                localidadesHeader = "Coronda - Saunce Viejo - Rincon"
                giganet = "http://giganet.gigared/?q=node/2325"
            break;
        case ("Monte Vera"):
        case ("B° Paproski"):
        case ("Angel Gallardo"):
                localidadesHeader = "Montevera - B° Paproski - Angel Gallardo"
                giganet = "http://giganet/?q=node/1817"
            break;
        case ("101"):
                localidadesHeader = "Crespo - Racedo"
                giganet = "http://giganet.gigared/?q=node/2144"
            break;
        case ("106"):
            localidadesHeader = "Goya"
            giganet = "http://giganet.gigared/?q=node/3078"
        break;
        case ("Barranqueras"):
        case ("San Luis del Palmar"):
            localidadesHeader = "Barranqueras - San Luis del Palmar"
            giganet = "http://giganet/?q=node/1982"
        break;
        case ("Red Codificada Resistencia"):
            localidadesHeader = "Red Codificada Resistencia"
            giganet = "http://giganet.gigared/?q=node/2362"
        break;
    
    
        default:
            break;
        }
    
    if(statusRetencion==true){
        giganet = "http://giganet.gigared/?q=node/1987"
    }

    let filaHeaderLocalidad = document.createElement("tr");
    let localidadHeader = document.createElement("th");
    let link = document.createElement("a");
    link.setAttribute("class","link_localidad")
    link.setAttribute("target","_blank")
    link.setAttribute("href",giganet)
    link.textContent = localidadesHeader;
    localidadHeader.setAttribute("colspan",spliterPremium(4));
    localidadHeader.setAttribute("id","filaHeaderLocalidad");
    localidadHeader.appendChild(link)
    filaHeaderLocalidad.appendChild(localidadHeader);
    filaHeaderLocalidad.appendChild
    return filaHeaderLocalidad
}

function precioDeLista(){
    let status = document.getElementById("captacion").checked
    let fila = document.querySelectorAll(".filaCuerpo");
    let tabla = document.getElementById("tabla");
    let cantidadfilas = tabla.childNodes.length
        if(status==true){
            if(fila.length==1){
                fila[0].setAttribute("preciolista",true)
                var fila1 = fila[0]
                var celdas = fila1.childNodes
                if(celdas[2].textContent!="Precio de lista"){
                    celdas[3].textContent = celdas[1].textContent;
                    celdas[2].textContent = "Precio de lista"
                    var precio =  parseInt(celdas[3].textContent.replace(/[^0-9]+/g, ""));
                    calcularModificacion();
                    mostrarGreen("Seleccionó precio de lista",0)
                    // alert("Seleccionó precio de lista")
                }
            }
            
        }
        else{
            if(fila.length==1){
                fila[0].setAttribute("preciolista",true)   
                var fila1 = fila[0]
                var celdas = fila1.childNodes
                if(celdas[3].textContent!="Precio de lista"){
                    celdas[4].textContent = celdas[1].textContent;
                    celdas[3].textContent = "Precio de lista";
                    if(cantidadfilas<5&&document.querySelector("#tFoot")==undefined){
                        celdas[0].textContent = "-";
                    }
                    celdas[2].textContent = "-";
                    calcularModificacion();
                    mostrarGreen("Seleccionó precio de lista",0)
                    // alert("Seleccionó precio de lista")
                }
            }
        }
}

function descuento(lista,des){
    var res = lista*(1-(des/100));
    res = Math.round(res)
    return res
}

function tablaPremium(e){
    let status = document.getElementById("captacion").checked
    let i = spliterPremium(3)
    let value = e.value
    let celdaSelector = e.parentNode
    let filaPremium = celdaSelector.parentNode
    filaPremium.setAttribute("tipo",listaLocalidades.Premium[value].tipo)
    let celdas = filaPremium.childNodes

    if(listaLocalidades.Premium[value].proporcionalesSC==false){
        mostrarRed(listaLocalidades.Premium[value].nameS+ " tiene días proporcionales CON CARGO")
        // alert(listaLocalidades.Premium[value].nameS+ " tiene días proporcionales CON CARGO")
    }

    let precio = descuento(listaLocalidades.Premium[value].precio,premiumLocalidades[subLocalidadSelectGlobal][value].descuentoPrecioLista)
    
    celdas[1].textContent = "$" + precio
    celdas[2].textContent = "-";
    if(status==false){
            celdas[3].textContent = "-";
    }
    celdas[i].textContent = "$" + precio
    celdas[i].setAttribute("value",precio)
    calcularModificacion();
    if(premiumLocalidades[subLocalidadSelectGlobal][value].desDisponible==true){
        selectorPromoPremium(celdas);
    }
}

function selectorPromoPremium(e){
    let i = spliterPremium(2);
    let filaCuerpo = document.querySelector(".filaCuerpo")
    let service = e[0].childNodes[0].value
    
    if(filaCuerpo.getAttribute("precioLista")=="true"){
        if(e[i].childNodes.length==0){
            var select = document.createElement("select");
            select.setAttribute("id","selecDesPremium");
            select.setAttribute("onchange","precioFinalPremium(this)");
    
            var noPromo = document.createElement("option");
            noPromo.setAttribute("selected","");
            noPromo.text = "-"

            var promo = document.createElement("option");
            promo.text =listaLocalidades.Premium[service].descuento.time + " meses con " + listaLocalidades.Premium[service].descuento.des + "%";
            select.appendChild(noPromo);
            select.appendChild(promo);
            e[i].appendChild(select);
        }
        else if(e[i].childNodes.length==1){
            var childs = e[i].childNodes
            var select = childs[0]
            e[i].removeChild(select);
            var select = document.createElement("select");
            select.setAttribute("id","selecDesPremium");
            select.setAttribute("onchange","precioFinalPremium(this)");
            var noPromo = document.createElement("option");
            noPromo.setAttribute("selected","");
            noPromo.text = "-";
            var promo = document.createElement("option");
            promo.setAttribute("align","center");
            promo.text = listaLocalidades.Premium[service].descuento.time + " meses con " + listaLocalidades.Premium[service].descuento.des + "%";
            select.appendChild(noPromo);
            select.appendChild(promo);
            e[i].appendChild(select);

        }
    }
}

function precioFinalPremium(e){
    let status = document.getElementById("captacion").checked
    let i = spliterPremium(2);
    let celdaSelector = e.parentNode.parentNode.childNodes;
    let service1 = celdaSelector[0].childNodes
    let service = service1[0].value
    let childs = celdaSelector[i].childNodes;    
    let promo = childs[0].value;
    if(promo!="-"&&promo!=undefined){
        let precio =listaLocalidades.Premium[service].precio
        if(localidadSelectGoblal=="Goya"){
            if(service=="HD"){
                precio = descuento(precio,68)
            }
            else if(service=="Adultos"){
                precio = descuento(precio,70)
            }
        }
        let descuentoPremium = listaLocalidades.Premium[service].descuento.des
        let valor = descuento(precio,descuentoPremium);

        celdaSelector[i+1].textContent = "$" + valor;
        celdaSelector[i+1].setAttribute("value",valor);
        calcularModificacion();
        if(status==false){
            celdaSelector[2].textContent = listaLocalidades.Premium[service].descuento.time;
        }
    }
    else{
        precio = listaLocalidades.Premium[service].precio;

        if(localidadSelectGoblal=="Goya"){
            if(service=="HD"){
                precio = descuento(precio,68)
            }
            else if(service=="Adultos"){
                precio = descuento(precio,70)
            }
        }
        celdaSelector[i+1].textContent = pesificado(precio);
        celdaSelector[i+1].setAttribute("value",precio);
        calcularModificacion();
    }

}

function reset(){
    location.reload ();  
}

function spliterPremium (index){
    let statusCaptacion = document.querySelector("#captacion").checked
    let statusRetencion = document.querySelector("#retencion").checked
    let statusUpgrade = document.querySelector("#upgrade").checked

    if(statusCaptacion==true){
        var i = index
    }
    else if(statusRetencion==true){
        var i = index+1
    }
    else if(statusUpgrade==true){
        var i = index
    }
    return i
}

function calculadora () {
    if(document.querySelectorAll(".filaCuerpo").length==1){
        let filaCuerpo = document.querySelector(".filaCuerpo")
        let celdaFilaCuerpo = filaCuerpo.childNodes
        if(celdaFilaCuerpo[2].childNodes.length<2&&celdaFilaCuerpo[3].childNodes.length<2){
            let tabla = document.getElementById("tabla");
            let tBody = document.querySelector("#tBody")
            let tFoot = document.querySelector("#tFoot")
            let fila = tBody.childNodes
            let i = spliterPremium(3);
            let valorTotal = 0
        
            if(tFoot==undefined){
                for (let a = 0; a < fila.length; a++) {
                    if(fila[a].getAttribute("class")=="filaCuerpo"||fila[a].getAttribute("class")=="filaPremium"||fila[a].getAttribute("class")=="filaCostoAdicional"){
                        let celda = fila[a].childNodes;
                        celda[i].setAttribute("onchange","calculadora()")
                        let valor = parseInt(celda[i].textContent.replace(/[^0-9]+/g, ""));
                        if(isNaN(valor)==true){
                            valor=0;
                        }
                        valorTotal = valorTotal + valor;
                        celda[i].setAttribute("onchange","calculadora()");
        
                    }
                }
                let tFoot = document.createElement("tfoot");
                tFoot.setAttribute("id","tFoot");
                let filaTotal = document.createElement("tr");
                filaTotal.setAttribute("id","filaTotal");
            
                let celdaTotal = document.createElement("td");
                celdaTotal.setAttribute("colspan",i);
                celdaTotal.setAttribute("class","tFootTotal");
                celdaTotal.textContent = "Total";
            
                let celdaValor = document.createElement("td");
                celdaValor.setAttribute("id","celdaValorTotal");
                celdaValor.textContent = "$" + valorTotal;
                celdaValor.value = valorTotal;
            
                filaTotal.appendChild(celdaTotal);
                filaTotal.appendChild(celdaValor);
                tFoot.appendChild(filaTotal);
    
                let navAdd = document.querySelector("#navAdd .nav-list")
    
                let containerPrecioListaBoton = document.createElement("div")
                let precioListaBoton = document.createElement("div")
                precioListaBoton.setAttribute("class","icon")
                let precioListaBotonLogo = document.createElement("i")
                precioListaBoton.appendChild(precioListaBotonLogo) 
                containerPrecioListaBoton.appendChild(precioListaBoton) 
                precioListaBotonLogo.setAttribute("class","fa-solid fa-hand-holding-dollar")
                precioListaBotonLogo.setAttribute("onclick","totalPrecioLista()")
    
                let precioListaBotonToolTip = document.createElement("h3")
                precioListaBotonToolTip.setAttribute("class","toolTip")
                precioListaBotonToolTip.textContent = "Calcular Precio Lista (Enter)"
                containerPrecioListaBoton.appendChild(precioListaBotonToolTip)
    
                navAdd.appendChild(containerPrecioListaBoton);
    
                tabla.appendChild(tFoot);
                }
            else{
                for (let a = 0; a < fila.length; a++) {
                    if(fila[a].getAttribute("class")=="filaCuerpo"||fila[a].getAttribute("class")=="filaPremium"||fila[a].getAttribute("class")=="filaCostoAdicional"){
                        let celda = fila[a].childNodes;
                        celda[i].setAttribute("onchange","calculadora()")
                        let valor = parseInt(celda[i].textContent.replace(/[^0-9]+/g, ""));
                        if(isNaN(valor)==true){
                            valor=0;
                        }
                        valorTotal = valorTotal + valor;
                        let celdaValor = tFoot.childNodes[0].childNodes[1]
                        celdaValor.textContent = "$" + valorTotal;
                    }
    
                }
            }

        }
        else{
            mostrarRed("Seleccione una de las opciones de descuento")
            // alert("Seleccione una de las opciones de descuento")
        }


    }
}

function calcularModificacion(){
    if(document.querySelector("#tFoot")!=undefined){
        calculadora();
    }
    if(document.querySelector("#filaTotalPrecioLista")!=undefined){
        totalPrecioLista();
    }
}

function quitarFila(){
    let tabla = document.getElementById("tabla");
    let tBody = document.querySelector("#tBody");
    let ultimaFila = tBody.childNodes[tBody.childNodes.length-1]
    if(ultimaFila.getAttribute("class")=="filaPremium"||ultimaFila.getAttribute("class")=="filaCostoAdicional"){
        tBody.removeChild(ultimaFila);
        if(document.querySelector("#tFoot")!=undefined){
            calculadora();
        }
    }
    if(document.querySelector("#filaTotalPrecioLista")!=undefined){
        totalPrecioLista();
    }
}


class servicio_class {
    constructor(nameS,nameG,v,capDes,capTime,capSc,capInstalacionSc,retencion,promoUpgrade,capMedioPago){
        this.nameS = nameS
        this.nameG = nameG
        this.v = v

        this.cap={
            des:capDes, // Porcentaje de descuento
            time:capTime, // Tiempo de promoción
            sc:capSc, //mes sin cargo
            instalacionSc: capInstalacionSc, // Cargo de instalación
            medioPago: capMedioPago // En caso de promoción diferida según medio de pago.
        }
        this.retencion = retencion
        this.promoUpgrade = promoUpgrade
    }
    precioLista(){
        if(this.nameS=="Pack Gamer"||this.nameS=="Tv"||this.nameS=="Pack Gamer FO"||this.nameS=="Wifi Plus"){
            var a = ""
        }
        else{
            var a = transNameV(this.v)
        }
        let s = transNameS(this.nameS)+a
        toString(s)
        let precio
        let status = document.querySelector("#captacion").checked
        if(status==true&&localidadSelectGoblal=="Posadas"){
            precio = descuento(listaLocalidades[this.nameG][s],coefiecientesDescuentos.PosadasSinDescuentoLocalidad[this.nameG][s]);
        }
        else{
            precio = descuento(listaLocalidades[this.nameG][s],coefiecientesDescuentos[localidadSelectGoblal][this.nameG][s]);
        }


        return precio;
    }
    precioCaptacion(i){
        if(Array.isArray(this.cap.des)==true){
            let precio = descuento (this.precioLista(),this.cap.des[i]);
            return precio;
        }
        else{
            let precio = descuento (this.precioLista(),this.cap.des);
            return precio;
        }
    }
    precioRetencion(iR){
        let precio = descuento(this.precioLista(),this.retencion[iR]);
        return precio;
    }
}

let datos={
    Sfe:{
        Tv: new servicio_class ("Tv","g1","",0,0,false,listaCostoAdicional.intalacionG1Tv.precio,retencionNormal),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,45,12,true,0,retencionNormal,true),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,45,12,true,0,retencionNormal,true),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,50,12,true,0,retencionNormal,true),

        TelInt_v1: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        TelInt_v2: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,45,12,false,0,retencionNormal,true),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,45,12,false,0,retencionNormal,true),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,50,12,false,0,retencionNormal,true),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",50,12,false,0,retencionNormal),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",50,12,false,0,[10,20,30,40]),
        // PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",40,12,false,0,[10,20,30,40]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",50,12,false,0,[10,20,30,40]),
    },

    Resi:{
        Tv: new servicio_class ("Tv","g1","",0,0,false,listaCostoAdicional.intalacionG1Tv.precio,retencionNormal,),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,45,12,true,0,retencionNormal,true),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,45,12,true,0,retencionNormal,true),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,50,12,true,0,retencionNormal,true),

        TelInt_v1: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        TelInt_v2: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,45,12,false,0,retencionNormal,true),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,45,12,false,0,retencionNormal,true),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,50,12,false,0,retencionNormal,true),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",50,12,false,0,retencionNormal),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",50,12,false,0,[10,20,30,40]),
        PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",50,12,false,0,[10,20,30,40]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",50,12,false,0,[10,20,30,40]),
    },

    Posadas:{
        Tv: new servicio_class ("Tv","g1","",0,0,false,listaCostoAdicional.intalacionG1Tv.precio,retencionNormal),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,45,12,true,0,retencionNormal,true),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,45,12,true,0,retencionNormal,true),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,50,12,true,0,retencionNormal,true),
      
        TelInt_v1: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        TelInt_v2: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,45,12,false,0,retencionNormal,true),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,45,12,false,0,retencionNormal,true),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,50,12,false,0,retencionNormal,true),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",50,12,false,0,retencionNormal),
        // G3_Gamer_Fo: new servicio_class ("Pack Gamer FO","g3","",50,12,false,0,retencionNormal),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",50,12,false,0,[10,20,30,40]),
        PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",50,12,false,0,[10,20,30,40]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",50,12,false,0,[10,20,30,40]),
        // PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",40,12,false,0,[10,20,30,40]),
    },


    ParaCorriPosaRes:{
        Tv: new servicio_class ("Tv","g1","",0,0,false,listaCostoAdicional.intalacionG1Tv.precio,retencionNormal),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,45,12,true,0,retencionNormal,true),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,45,12,true,0,retencionNormal,true),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,50,12,true,0,retencionNormal,true),
      
        TelInt_v1: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        TelInt_v2: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v2,45,12,false,0,retencionNormal),
        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,45,12,false,0,retencionNormal,true),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,45,12,false,0,retencionNormal,true),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,50,12,false,0,retencionNormal,true),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",50,12,false,0,retencionNormal),
        // G3_Gamer_Fo: new servicio_class ("Pack Gamer FO","g3","",50,12,false,0,retencionNormal),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",50,12,false,0,[10,20,30,40]),
        PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",50,12,false,0,[10,20,30,40]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",50,12,false,0,[10,20,30,40]),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",50,12,false,0,[10,20,30,40]),
    },



    CrespRaced:{
        Tv: new servicio_class ("Tv","g1","",0,0,false,listaCostoAdicional.intalacionG1Tv.precio),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,45,12,false,0),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,45,12,false,0),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,50,12,false,0),
      
        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,45,12,true,0),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,45,12,true,0),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,50,12,true,0),

        TelInt_v1: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v1,45,12,false,0),
        TelInt_v2: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v2,45,12,false,0),
        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,50,12,false,0),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,45,12,false,0),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,45,12,false,0),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,50,12,false,0),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",50,12,false,0),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",50,12,false,0),
        PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",50,12,false,0),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",50,12,false,0),
    },



    BarranSluis:{
        Tv: new servicio_class ("Tv","g1","",0,0,false,listaCostoAdicional.intalacionG1Tv.precio,[10,20,30,40]),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,45,12,false,0,[10,20,30,40]),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,45,12,false,0,[10,20,30,40]),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,40,12,false,0,[10,20,30,40]),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,45,12,true,0,[10,20,30,40],true),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,45,12,true,0,[10,20,30,40],true),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,40,12,true,0,[10,20,30,40],true),

        TelInt_v1: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v1,45,12,false,0,[10,20,30,40]),
        TelInt_v2: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v2,45,12,false,0,[10,20,30,40]),
        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,40,12,false,0,[10,20,30,40]),
        
        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,45,12,false,0,[10,20,30,40],true),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,45,12,false,0,[10,20,30,40],true),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,40,12,false,0,[10,20,30,40],true),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",40,12,false,0,[10,20,30,40]),

        PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",40,6,false,0,[10,20,30,40]),
    },



    SanMartin:{
        Tv: new servicio_class ("Tv","g1","",50,12,false,0,[10,20,30]),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,35,12,false,0,[10,20,30]),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,35,12,false,0,[10,20,30]),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,40,12,false,0,[10,20,30]),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,35,12,true,0,[10,20,30],true),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,35,12,true,0,[10,20,30],true),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,40,12,true,0,[10,20,30],true),

        TelInt_v1: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v1,35,12,false,0,[10,20,30]),
        TelInt_v2: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v2,35,12,false,0,[10,20,30]),
        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,40,12,false,0,[10,20,30]),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,35,12,false,0,[10,20,30],true),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,35,12,false,0,[10,20,30],true),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,40,12,false,0,[10,20,30],true),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",30,12,false,0,[10,20,30]),
        PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",30,12,false,0,[10,20,30]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",30,12,false,0,[10,20,30]),

    },



    CorondaSauceRincon:{
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,35,6,true,0),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,35,6,true,0),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,40,6,true,0),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,35,6,true,0),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,35,6,true,0),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,40,6,true,0),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,35,6,true,0),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,35,6,true,0),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,40,6,true,0,[10]),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",40,6,false,0,[10]),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",25,6,false,0),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",25,6,false,0),
        PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",25,12,false,0),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",25,12,false,0),
    },



    MonteveraGallardo:{
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,35,6,true,0),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,35,6,true,0),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,40,6,true,0),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,35,6,true,0),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,35,6,true,0),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,40,6,true,0),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,35,6,true,0),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,35,6,true,0,[10]),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,40,6,true,0,[10]),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",40,6,false,0,[10]),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",10,6,false,0),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",10,6,false,0),
        // PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",10,12,false,0,[10,20,30,40]),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",10,12,false,0),
    },



    Goya:{
        Tv: new servicio_class ("Tv","g1","",10,12,false,0,[10,20]),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,50,12,false,0,[10,20]),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,45,12,false,0,[10,20]),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,45,12,false,0,[10,20]),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,50,12,true,0,[10,20],true),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,45,12,true,0,[10,20],true),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,45,12,true,0,[10,20],true),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,50,12,false,0,[10,20],true),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,45,12,false,0,[10,20],true),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,45,12,false,0,[10,20],true),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",40,12,false,0,[10,20]),
        PackNegocios_150: new servicio_class("Pack Negocios","negocios","150MB",40,12,false,0,[10,20]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",40,12,false,0,[10,20]),
    },



    Caba:{
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,[25,50],[12,12],[true,true],0,undefined,undefined,["Contado","DA"]),
        Int_v4: new servicio_class ("Internet","g1",serviciosVelocidades.v4,[30,60],[12,12],[true,true],0,[10],undefined,["Contado","DA"]),

        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,[15,35],[12,12],[true,true],0,undefined,undefined,["Contado","DA"]),
        TvInt_v4: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v4,[20,40],[12,12],[true,true],0,[10],undefined,["Contado","DA"]),

        TelInt_v3: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v3,[25,50],[12,12],[true,true],0,undefined,undefined,["Contado","DA"]),
        TelInt_v4: new servicio_class ("Telefonía + Internet","g2",serviciosVelocidades.v4,[30,60],[12,12],[true,true],0,[10],undefined,["Contado","DA"]),


        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,[15,35],[6,6],[true,true],0,undefined,undefined,["Contado","DA"]),
        G3_v4: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v4,[20,40],[6,6],[true,true],0,[10],undefined,["Contado","DA"]),
        // G3_Gamer: new servicio_class ("Pack Gamer","g3","",[10,30],[6,6],[true,true],[10],undefined,["Contado","DA"]),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",[20,30],[6,6],[false,false],0,[10],undefined,["Contado","DA"]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",[20,30],[6,6],[false,false],0,[10],undefined,["Contado","DA"]),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",[20,30],[6,6],[false,false],0,[10],undefined,["Contado","DA"]),

    },

    CampanaSanpedro:{
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,[10,30],[6,6],[true,true],0,[10],undefined,["Contado","DA"]),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,[10,30],[6,6],[true,true],0,[10],undefined,["Contado","DA"]),

        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,[10,30],[6,6],[true,true],0,[10],undefined,["Contado","DA"]),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,[10,30],[6,6],[true,true],0,[10],undefined,["Contado","DA"]),

        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,[10,30],[6,6],[true,true],0,[10],undefined,["Contado","DA"]),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,[10,30],[6,6],[true,true],0,[10],undefined,["Contado","DA"]),
        // G3_Gamer: new servicio_class ("Pack Gamer","g3","",[10,30],[6,6],[true,true],0,[10],undefined,undefined,["Contado","DA"]),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",[20,30],[6,6],[false,false],0,[10],undefined,["Contado","DA"]),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",[20,30],[6,6],[false,false],0,[10],undefined,["Contado","DA"]),
        PackNegociosLite_150: new servicio_class("Pack Negocios Lite","negocios","150MB",[20,30],[6,6],[false,false],0,[10],undefined,["Contado","DA"]),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",[20,30],[6,6],[false,false],0,[10],undefined,["Contado","DA"]),
    },



    SantoTome:{
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,0,0,false,0),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,0,0,false,0),
        Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,0,0,false,0),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,0,0,false,0),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,0,0,false,0),
        TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,0,0,false,0,[10]),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,0,0,false,0),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,0,0,false,0),
        G3_v3: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v3,0,0,false,0,[10]),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",0,0,false,0),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",0,0,false,0),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",0,0,false,0),
        PackNegocios_250: new servicio_class("Pack Negocios","negocios","250MB",0,0,false,0),
        PackNegociosLite_250: new servicio_class("Pack Negocios Lite","negocios","250MB",0,0,false,0),



        Zona_Wifi: new servicio_class ("Wifi Plus","wireless","30MB",30,6,false,0,[10,20,30]),
    },

    ResistenciaRedCodificada:{
        Tv: new servicio_class ("Tv","g1","",0,0,false,6180,retencionNormal),
        Int_v1: new servicio_class ("Internet","g1",serviciosVelocidades.v1,45,12,false,0,retencionNormal),
        Int_v2: new servicio_class ("Internet","g1",serviciosVelocidades.v2,50,12,false,0,retencionNormal),
        // Int_v3: new servicio_class ("Internet","g1",serviciosVelocidades.v3,50,12,false,0,retencionNormal),

        TvInt_v1: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v1,45,12,true,0,retencionNormal),
        TvInt_v2: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v2,50,12,true,0,retencionNormal),
        // TvInt_v3: new servicio_class ("TV + Internet","g2",serviciosVelocidades.v3,50,12,true,0,retencionNormal),

        G3_v1: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v1,35,12,false,0,retencionNormal),
        G3_v2: new servicio_class ("TV + Internet + Telefonía","g3",serviciosVelocidades.v2,35,12,false,0,retencionNormal),
        G3_Gamer: new servicio_class ("Pack Gamer","g3","",40,12,false,0,retencionNormal),

        PackNegocios_120: new servicio_class("Pack Negocios","negocios","120MB",40,12,false,0,[10,20,30,40]),

    }
}

function transNameS(x) {        // Convierte la expresión Internet en Int por ejemplo
    let b
    switch (x) {
        case "Tv":
            b = "Tv"
            break;
        case "Internet":
            b = "Int"
            break;
        case "TV + Internet":
            b = "TvInt"
            break;
        case "Telefonía + Internet":
            b = "TelInt"
            break;
        case "TV + Internet + Telefonía":
            b = "TvTelInt"
            break;
        case "Pack Gamer":
            b = "PackGamer"
            break;
        case "Pack Gamer FO":
            b = "PackGamerFo"
            break;
        case "Pack Negocios":
            b = "PackNegocios"
            break;
        case "Pack Negocios Lite":
            b = "PackNegociosLite"  
            break;
        case "Wifi Plus":
            b = "wifiPlus"  
            break;

    
        default:
            break;
    }
    return b
}

function transNameV(x) {     // Convierte la exprección 50MB en v1 por ejemplo
    let a
    switch (x) {
        case serviciosVelocidades.v1:
            a = "v1"
            break;
        case serviciosVelocidades.v2:
            a = "v2"
            break;
        case serviciosVelocidades.v3:
            a = "v3"
            break;
        case serviciosVelocidades.v4:
            a = "v4"
            break;
        case "120MB":
            a = "120"
            break;
        case "150MB":
            a = "150"
            break;
        case "250MB":
            a = "250"
            break;
        
    
        default:
            break;
    }
    return a
}

function selectorLocalidad(x){
    let selector = document.querySelector("#localidad");
    let local
    switch (selector.value) {
        case ("001"):
                local = "Sfe"
            break;
        case ("002"):
        case ("003"):
            local = "ParaCorriPosaRes"
            break;
        case ("005"):
                local = "Posadas"
            break;
        case ("004"):
                local = "Resi"
            break;
        case ("Santo Tomé"):
                local = "SantoTome"
            break;
        case ("103"):
        case ("105"):
                local = "CampanaSanpedro"
            break;
        case ("100"):
            local = "Caba"
            break;
        case ("102"):
                local = "SanMartin"
            break;
        case ("Sauce Viejo"):
        case ("Rincon"):
        case ("104"):
                local = "CorondaSauceRincon"
            break;
        case ("Monte Vera"):
        case ("B° Paproski"):
        case ("Angel Gallardo"):
                local = "MonteveraGallardo"
            break;
        case ("101"):
                local = "CrespRaced"
            break;
        case ("106"):
            local = "Goya"
        break;
        case ("Barranqueras"):
        case ("San Luis del Palmar"):
            local = "BarranSluis"
        break;
        case ("Red Codificada Resistencia"):
            local = "ResistenciaRedCodificada"
        break;
    
        default:
            break;
    }
    switch (selector.value) {
        case ("001"):
                subLocalidadSelectGlobal = "SantaFe"
            break;
        case ("002"):
                subLocalidadSelectGlobal = "Parana"
            break;
        case ("003"):
                subLocalidadSelectGlobal = "Corrientes"
            break;
        case ("004"):
                subLocalidadSelectGlobal = "Resistencia"
            break;
        case ("005"):
                subLocalidadSelectGlobal = "Posadas"
            break;
        case ("Santo Tomé"):
                subLocalidadSelectGlobal = "SantoTome"
            break;
        case ("103"):
                subLocalidadSelectGlobal = "Campana"
            break;
        case ("100"):
                subLocalidadSelectGlobal = "Caba"
            break;
        case ("105"):
                subLocalidadSelectGlobal = "SanPedro"
            break;
        case ("102"):
                subLocalidadSelectGlobal = "SanMartin"
            break;
        case ("Sauce Viejo"):
                subLocalidadSelectGlobal = "SauceViejo"
                break;
        case ("Rincon"):
                subLocalidadSelectGlobal = "Rincon"
            break;
        case ("104"):
                subLocalidadSelectGlobal = "Coronda"
            break;
        case ("Monte Vera"):
                subLocalidadSelectGlobal = "MonteVera"
            break;
        case ("B° Paproski"):
                subLocalidadSelectGlobal = "BPaproski"
            break;
        case ("Angel Gallardo"):
                subLocalidadSelectGlobal = "AngelGallardo"
            break;
        case ("101"):
                subLocalidadSelectGlobal = "CrespRaced"
            break;
        case ("106"):
            subLocalidadSelectGlobal = "Goya"
        break;
        case ("Barranqueras"):
                subLocalidadSelectGlobal = "Barranqueras"
            break;
        case ("San Luis del Palmar"):
            subLocalidadSelectGlobal = "SanLuisDelPalmar"
        break;
        case ("Red Codificada Resistencia"):
            subLocalidadSelectGlobal = "ResistenciaRedCodificada"
        break;
    
        default:
            break;
    }
    localidadSelectGoblal = local
    if(x==true){
        let dataLocal = datos[local]
        return dataLocal

    }
    else{
        return local
    }
}

function createTableUpgrade(){
    deleteTable();

    let containerTabla = document.createElement("div")
    containerTabla.setAttribute("id","containerTabla")

    let tabla = document.createElement("table");
    tabla.setAttribute("id","tabla");
    tabla.innerHTML = `<colgroup>
                            <col style="width: 30%;">
                            <col style="width: 20%;">
                            <col style="width: 30%;">
                            <col style="width: 20%;">
                        </colgroup>` 
    let tHeader = document.createElement("thead");
    let tBody = document.createElement("tbody");

    tBody.setAttribute("id","tBody");
    tabla.appendChild(tHeader);
    tabla.appendChild(tBody);

    tHeader.appendChild(encabezadoLocalidad());
    tHeader.appendChild(encabezado());
    containerTabla.appendChild(tabla)
    document.body.appendChild(containerTabla);

    let dataLocal = selectorLocalidad(true);
        for (let i = 0; i < Object.keys(dataLocal).length; i++) {
            let currentService = dataLocal[Object.keys(dataLocal)[i]]
            if(currentService.promoUpgrade==true){
                if(filtro(currentService)){
                    encabezadoServicioG(currentService.nameG)
                    fila = document.createElement("tr");
                    fila.setAttribute("ondblclick","autoSelect(this)")
                    fila.setAttribute("key",Object.keys(dataLocal)[i])
                    fila.setAttribute("class","filaCuerpo")
                    let cellServicio = document.createElement("td")
                    cellServicio.setAttribute("class","primeraCelda")
                    if(currentService.v==""){cellServicio.textContent = currentService.nameS}
                    else{cellServicio.textContent = currentService.nameS+" ("+currentService.v+")"}
                    let cellPrecio = document.createElement("td")
                    cellPrecio.textContent = pesificado(currentService.precioLista());
                    if(currentService.nameG=="negocios"){
                        cellPrecio.textContent = cellPrecio.textContent + " + IVA"
                    }

                    fila.appendChild(cellServicio)
                    fila.appendChild(cellPrecio)
                    
                    descuentosUpgradeDiferidos(currentService,fila,upgradeNormal)
                    
                    tBody.appendChild(fila)
                }

            }
            
        }

        
        addNav;
        createInfo();
        createTkt();
        
        if(document.querySelector(".filaCuerpo")==undefined){
            alert ("Esta localidad no cuenta con promoción upgrade")
            deleteAll();
        }
}

function createTable(){
    deleteTable();

    let containerTabla = document.createElement("div")
    containerTabla.setAttribute("id","containerTabla")

    let tabla = document.createElement("table");
    tabla.setAttribute("id","tabla");
    tabla.innerHTML = `<colgroup>
                            <col style="width: 30%;">
                            <col style="width: 20%;">
                            <col style="width: 30%;">
                            <col style="width: 20%;">
                        </colgroup>`  
    let tHeader = document.createElement("thead");
    let tBody = document.createElement("tbody");
    tBody.setAttribute("id","tBody");
    tabla.appendChild(tHeader);
    tabla.appendChild(tBody);

    tHeader.appendChild(encabezadoLocalidad());
    tHeader.appendChild(encabezado());
    containerTabla.appendChild(tabla)
    document.body.appendChild(containerTabla);

    let dataLocal = selectorLocalidad(true);
        for(iS=0;iS<Object.keys(dataLocal).length;iS++){
            let data = dataLocal[Object.keys(dataLocal)[iS]]
            if (filtro(data)==true) {
                encabezadoServicioG(data.nameG)
                fila = document.createElement("tr");
                fila.setAttribute("ondblclick","autoSelect(this)")
                fila.setAttribute("key",Object.keys(dataLocal)[iS])
                fila.setAttribute("class","filaCuerpo")
                let cellServicio = document.createElement("td")
                cellServicio.setAttribute("class","primeraCelda")
                console.log(data.nameS)
                if(data.v==""){
                    let link = queIncluyeCaptacionLinkRender(data.nameS)
                    if(link!=undefined){
                        cellServicio.innerHTML = `<a class="nameServiceTable nameServiceTableLink" href=${queIncluyeCaptacionLinkRender(data.nameS)}>${data.nameS}</a>`
                    }
                    else{
                        cellServicio.innerHTML += `<span class="nameServiceTable">${data.nameS}</span>`
                    }
                }
                else{
                    let link = queIncluyeCaptacionLinkRender(data.nameS)
                    console.log(link)
                    if(link!=undefined){
                        cellServicio.innerHTML += `<a class="nameServiceTable nameServiceTableLink" href=${queIncluyeCaptacionLinkRender(data.nameS)}>${data.nameS} (${data.v})</a>`
                    }
                    else{
                        cellServicio.innerHTML += `<span class="nameServiceTable">${data.nameS} (${data.v})</span>`
                    }
                    // cellServicio.textContent = data.nameS+" ("+data.v+")"
                }
                if(data.v=="200MB"||data.v=="500MB"||data.v=="250MB"){cellServicio.innerHTML += `<span class="solo-fo"> (Solo FO)</span>`}
                let cellPrecio = document.createElement("td")
                cellPrecio.textContent = pesificado(data.precioLista());
                if(data.nameG=="negocios"){
                    cellPrecio.textContent = cellPrecio.textContent + " + IVA"
                }
                
                fila.appendChild(cellServicio)
                fila.appendChild(cellPrecio)
                
                if(Array.isArray(data.cap.des)==true){
                    captacionDiferida(data,fila);
                }
                else{
                    let cellPromo = document.createElement("td");
                    let cellPrecioFinal = document.createElement("td")
                    cellPromo.textContent = descuentoCapTabla(data);   
                    cellPrecioFinal.textContent = pesificado(data.precioCaptacion());
                    if(data.nameG=="negocios"){
                        cellPrecioFinal.textContent = cellPrecioFinal.textContent + " + IVA"
                    }
                    fila.appendChild(cellPromo)
                    fila.appendChild(cellPrecioFinal)

                }

                tBody.appendChild(fila)
    
                
            }
        }
        addNav;
    createInfo();
    createTkt();
}

function encabezadoServicioG(nameG){
    let status = document.querySelector("#captacion").checked
    let tBody = document.querySelector("#tBody")
    let filasG = document.querySelectorAll(".filaG")
    let cellG = document.querySelectorAll(".cellG")
    let a = false
    if(filasG.length!=0){
        if(a==false){
            for (let i = 0; i < cellG.length; i++) {
                if(cellG[i].textContent==nameG.toUpperCase()){
                    a = true
                }
            }
            if(a==false){
                let filaG = document.createElement("tr")
                let cellG = document.createElement("td")
                filaG.setAttribute("class","filaG")
                cellG.setAttribute("class","cellG")
                cellG.setAttribute("colspan",spliterPremium(4))
            
                cellG.textContent = nameG.toUpperCase()
                filaG.appendChild(cellG)
                tBody.appendChild(filaG)
            }
        }
        
    }
    else{
        let filaG = document.createElement("tr")
        let cellG = document.createElement("td")
        filaG.setAttribute("class","filaG")
        cellG.setAttribute("class","cellG")
        cellG.setAttribute("colspan",spliterPremium(4))
    
        cellG.textContent = nameG.toUpperCase()
        filaG.appendChild(cellG)
        tBody.appendChild(filaG)
    }
}

function filtro(data){
    let servicioSelected = document.querySelector("#servicio");

    if(servicioSelected==undefined||servicioSelected.value==data.nameS){
        let velSelected = document.querySelector("#velocidad")
        if(velSelected==undefined||velSelected.value==data.v||velSelected.value=="Seleccione velocidad"){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

function deleteTable(){
    let status = document.querySelector("#captacion").checked
    let tabla = document.querySelector("#tabla")
    let containerTabla = document.querySelector("#containerTabla")

    if(tabla!=undefined){
        document.body.removeChild(containerTabla)
    }
    let navAdd = document.querySelector("#navAdd")
    if(navAdd!=undefined){
        document.body.removeChild(navAdd)   
    }
    let container = document.querySelector("#container-info")
    if(container!=undefined){
        document.body.removeChild(container)   
    }
    let tkt = document.querySelector("#container-tkt")
    if(tkt!=undefined){
        document.body.removeChild(tkt)   
    }

}

function deleteSelectorServicio(){
    let selector = document.querySelector("#servicio")
    let selectores = document.querySelector("#selectores")
    let velSelect = document.querySelector("#velocidad")

    if(selector!=undefined){
        selectores.removeChild(selector)
    }
    if(velSelect!=undefined){
        document.querySelector("#selectores").removeChild(velSelect)
    }

}

function opcionesSelectorServicio(data,newSelectServicio){
    let a = "label_"+data.nameG
    let label = document.querySelector("#"+a)
    if(label==undefined){
        if(document.querySelector("#op_"+transNameS(data.nameS))==undefined){
            let servicioG = document.createElement("optgroup");
            servicioG.setAttribute("id","label_"+data.nameG);
            servicioG.setAttribute("label",data.nameG.toUpperCase());
            let servicio = document.createElement("option");
            servicio.setAttribute("id","op_"+transNameS(data.nameS))
            if(data.nameS=="Tv"){
                servicio.textContent = data.nameS.toUpperCase();
                servicio.setAttribute("value",data.nameS)
            }
            else{
                servicio.textContent = data.nameS
            }
            servicioG.appendChild(servicio);
            newSelectServicio.append(servicioG)
            document.querySelector("#selectores").appendChild(newSelectServicio);
        }
    }
    else{
        if(document.querySelector("#op_"+transNameS(data.nameS))==undefined){
            let servicio = document.createElement("option");
            servicio.setAttribute("id","op_"+transNameS(data.nameS))
            servicio.textContent = data.nameS
            label.append(servicio)
            newSelectServicio.append(label)
            document.querySelector("#selectores").appendChild(newSelectServicio);
        }
    }

}

function createSelectorVel(dataLocal){
    let statusUpgrade = document.querySelector("#upgrade").checked
    let velSelect = document.querySelector("#velocidad")    
    if(velSelect!=null){
        document.querySelector("#selectores").removeChild(velSelect)
    }
    createTableSpliter();

    let servicioSelect = document.querySelector("#servicio").value;
    
    if (servicioSelect!="Tv"&&servicioSelect!="Pack Gamer"){
        let oldSelectVel = document.querySelector("#vel")
        if(oldSelectVel!=undefined){
            document.querySelector("#vel").removeChild(oldSelectVel);
        }
        let newSelectVel = document.createElement("select");
        newSelectVel.setAttribute("id","velocidad");
        newSelectVel.setAttribute("onchange","createTableSpliter();")

        let dss = document.createElement("option");
        dss.text = "Seleccione velocidad";
        dss.setAttribute("selected","");
        dss.setAttribute("disabled","");
        newSelectVel.appendChild(dss);

        for(iS=0;iS<Object.keys(dataLocal).length;iS++){
            let data = dataLocal[Object.keys(dataLocal)[iS]]
            if(statusUpgrade){
                if(data.promoUpgrade){
                    opcionesSelectorVel(data,newSelectVel);
                }
            }
            else{
                opcionesSelectorVel(data,newSelectVel);
            }

        }

        document.querySelector("#selectores").appendChild(newSelectVel);
    }

}

function opcionesSelectorVel(data,newSelectVel){
    let a = "opV_"+data.v
    let servicioSelect = document.querySelector("#servicio");
    let label = document.querySelector("#"+a)
    if(label==undefined){
        if(data.nameS==servicioSelect.value){
            if(data.v!=""){
                let vel = document.createElement("option");
                vel.setAttribute("id","opV_"+data.v)
                vel.textContent = data.v
                newSelectVel.append(vel)
                document.querySelector("#selectores").appendChild(newSelectVel);
            }
        }
    }
}

function descuentoCapTabla(data,i){
    let infoDescuento = data.cap
    let resultado
    if(Array.isArray(infoDescuento.des)==false){
        if(infoDescuento.sc==true){
            resultado = "1 mes SC + "+infoDescuento.time+" meses con "+infoDescuento.des+"%"
            if(infoDescuento.instalacionSc!=0){
                resultado = resultado + " // " + intalacionConCargo(infoDescuento.instalacionSc)
            }
        }
        else{
            if (infoDescuento.des==0) {
                if(infoDescuento.instalacionSc!=0){
                    resultado = intalacionConCargo(infoDescuento.instalacionSc)
                }
                else{
                    resultado = "-"
                }
            }
            else{
                resultado = infoDescuento.time+" meses con "+infoDescuento.des+"%"
                if(infoDescuento.instalacionSc!=0){
                    resultado = resultado + " // " + intalacionConCargo(infoDescuento.instalacionSc)
                }
            }
        }
        return resultado
    }
    else{
        if(infoDescuento.sc[i]==true){
            resultado = infoDescuento.medioPago[i]+": "+ "1 mes SC + "+infoDescuento.time[i]+" meses con "+infoDescuento.des[i]+"%"
            if(infoDescuento.instalacionSc!=0){
                resultado = resultado + " // " + intalacionConCargo(infoDescuento.instalacionSc)
            }
        }
        else{
            if (infoDescuento.des==0) {
                if(infoDescuento.instalacionSc!=0){
                    resultado = intalacionConCargo(infoDescuento.instalacionSc)
                }
                else{
                    resultado = "-"
                }
            }
            else{
                resultado = infoDescuento.medioPago[i]+": "+ infoDescuento.time[i]+" meses con "+infoDescuento.des[i]+"%"
                if(infoDescuento.instalacionSc!=0){
                    resultado = resultado + " // " + intalacionConCargo(infoDescuento.instalacionSc)
                }
            }
        }
        return resultado
    }
}

function deleteAll(){
    modificaTitulo()
    deleteTable()
    deleteSelectorServicio()
    let info = document.querySelector("#container-info")
    let tkt = document.querySelector("#container-tkt")
    let localidadSelect = document.querySelector("#localidad")
    if(localidadSelect!=undefined){
        localidadSelect.value="Seleccione localidad"
    }
    let navAdd = document.querySelector("#navAdd")
    if(navAdd!=undefined){
        document.body.removeChild(navAdd)   
    }
    if(info!=undefined){
        document.body.removeChild(info)   
    }
    if(tkt!=undefined){
        document.body.removeChild(tkt)   
    }
}

function autoSelect(filaSelected){
    let dataLocal = selectorLocalidad(true)
    let statusCaptacion = document.querySelector("#captacion").checked
    let statusUpgrade = document.querySelector("#upgrade").checked
    let filaHeaderLocalidad = encabezadoLocalidad();
    let servicioSelect = filaSelected.getAttribute("key");
    let data = dataLocal[servicioSelect]


    deleteAll();

    let tabla = document.createElement("table");
    tabla.setAttribute("id","tabla");
    if(statusCaptacion||statusUpgrade){
        tabla.innerHTML = `<colgroup>
                                <col style="width: 30%;">
                                <col style="width: 20%;">
                                <col style="width: 30%;">
                                <col style="width: 20%;">
                            </colgroup>` 
    }

    let containerTabla = document.createElement("div");
    containerTabla.setAttribute("id","containerTabla")

    let tHeader = document.createElement("thead");
    let tBody = document.createElement("tbody");
    tBody.setAttribute("id","tBody");
    tabla.appendChild(tHeader);
    tabla.appendChild(tBody);
    filaSelected.removeAttribute("onclick");

    tHeader.appendChild(filaHeaderLocalidad);
    tHeader.appendChild(encabezado());
    if(statusCaptacion==true||statusUpgrade==true){
        let filaG = document.createElement("tr")
        filaG.setAttribute("class","filaG")
        let cellG = document.createElement("td")
        cellG.setAttribute("colspan",spliterPremium(4))
        cellG.textContent = data.nameG.toUpperCase()
        
        filaG.appendChild(cellG)
        tBody.appendChild(filaG)
        tBody.appendChild(filaSelected);
    }
    else{
        let celdaUnida = document.querySelector(".celdaUnida")
        if(celdaUnida!=undefined){
            celdaUnida.removeAttribute("colspan")
        }
        
        var filaServicio = document.createElement("tr")
        filaServicio.setAttribute("class","filaG")
        var cellServicio = document.createElement("td")
        cellServicio.setAttribute("colspan",spliterPremium(4))
        filaServicio.appendChild(cellServicio)
        
        if(data.v==""){cellServicio.textContent = data.nameS}
        else{cellServicio.textContent = data.nameS+" ("+data.v+")"}
        filaSelected.childNodes[0].textContent=cellServicio.textContent
        filaSelected.childNodes[0].setAttribute("class","primeraCelda")
        filaSelected.childNodes[1].removeAttribute("rowspan")
        filaSelected.childNodes[1].removeAttribute("class")
        tBody.appendChild(filaServicio)
        if (filaSelected.childNodes.length==5) {
            tBody.appendChild(filaSelected);
        }
        else{
            let cellPrecio = document.createElement("td");
            cellPrecio.textContent = pesificado(dataLocal[servicioSelect].precioLista());
            filaSelected.insertBefore(cellPrecio,filaSelected.childNodes[1])
            tBody.appendChild(filaSelected);
        }
        fechaFacturacion();
    }

    containerTabla.appendChild(tabla)
    document.body.appendChild(containerTabla);
    let spans = document.querySelectorAll(".spanDoble")
    for(let i=0;spans.length>i;i++){
        spans[i].setAttribute("onclick","eligePromo(this)")
    }
    addNav(localidad);
    createInfo();
    createTkt();
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
    // createInfo(dataLocal);
}

function createTableRetenecion(){
    deleteTable();
    let containerTabla = document.createElement("div")
    containerTabla.setAttribute("id","containerTabla")
    let tabla = document.createElement("table");
    tabla.setAttribute("id","tabla")
    let tHeader = document.createElement("thead");
    let tBody = document.createElement("tbody");
    tBody.setAttribute("id","tBody");
    tabla.appendChild(tHeader);
    tabla.appendChild(tBody);

    tHeader.appendChild(encabezadoLocalidad());
    tHeader.appendChild(encabezado());

    containerTabla.appendChild(tabla);
    document.body.appendChild(containerTabla);

    let dataLocal = selectorLocalidad(true);
    for(iS=0;iS<Object.keys(dataLocal).length;iS++){
        let data = dataLocal[Object.keys(dataLocal)[iS]]
        if(document.querySelector("#servicio")==undefined){
            if(data.retencion!=undefined){
                encabezadoServicioG(data.nameG);

            }
        }
        if (filtro(data)==true){
            if(data.retencion!=undefined){
                var filaServicio = document.createElement("tr")
                var cellServicio = document.createElement("td")
                if(data.v==""){cellServicio.textContent = data.nameS}
                else{cellServicio.textContent = data.nameS+" ("+data.v+")"}
                filaServicio.setAttribute("class","filaG")
                cellServicio.setAttribute("class","cellG")
                cellServicio.setAttribute("colspan",spliterPremium(4))
                filaServicio.appendChild(cellServicio)
                tBody.appendChild(filaServicio)

                for(iR=0;iR<Object.keys(data.retencion).length;iR++){
                    var fila = document.createElement("tr");
                    fila.setAttribute("ondblclick","autoSelect(this)")
                    fila.setAttribute("key",Object.keys(dataLocal)[iS])
                    fila.setAttribute("class","filaCuerpo")

                    let opCell = document.createElement("td")
                    opCell.textContent = iR+1
                    fila.appendChild(opCell)
                    
                    if(iR==0){
                        var cellPrecio = document.createElement("td");
                        cellPrecio.textContent = pesificado(data.precioLista());
                        cellPrecio.setAttribute("class","celdaUnida");
                        cellPrecio.setAttribute("rowspan",Object.keys(data.retencion).length);
                        fila.appendChild(cellPrecio)
                    }
                    
                    
                    let cellVigencia = document.createElement("td")
                    cellVigencia.textContent = "3 o 6"
                    let cellPromo = document.createElement("td")            
                    cellPromo.textContent = data.retencion[iR]+"%"
                    let cellPrecioFinal = document.createElement("td")
                    cellPrecioFinal.textContent = pesificado(data.precioRetencion(iR));
                    fila.appendChild(cellVigencia)
                    fila.appendChild(cellPromo)
                    fila.appendChild(cellPrecioFinal)
                    tBody.appendChild(fila)

                }
            }
        }
    }
    if(document.querySelector(".filaCuerpo")==undefined){
        let url = "http://giganet.gigared/?q=node/2059"
        if(window.confirm("Esta localidad no cuenta con promoción captación, unicamente promociones por adeshión al Débito Automático (Revisar giganet)")){
            window.open(url)
        }
        deleteAll();
    }
    addNav();
    createInfo();
    createTkt();
    if(localidadSelectGoblal=="Posadas"){//Se agrega cartel de alerta para diferenciar que la captación de posadas no tiene descuento localidad
        mostrarRed("Los valores de la tabla de retención de Posadas no tiene incluido descuento de localidad debido a que el mismo aplica solo para clientes nuevos, revisar de todas formas si tiene descuento de localidad cargado en boxi.")
    }
}
function createTableSpliter(){
    let captacionStatus = document.querySelector("#captacion").checked
    let retencionStatus = document.querySelector("#retencion").checked
    let upgradeStatus = document.querySelector("#upgrade").checked
    if(captacionStatus==true){
        createTable();
    }
    else if(retencionStatus==true) {
        createTableRetenecion();
    }
    else if(upgradeStatus==true){
        createTableUpgrade();
    }
}

function filtroPremium(servicioPremium){
    
    if(servicioPremium.tipo!="Premium secundario"){
        return true
    }
    else{
        if(servicioPremium.tipo=="Premium secundario"){
            let filasPremium = document.querySelectorAll(".filaPremium")
            for (let i=0;i<filasPremium.length;i++) {
                let tipo = filasPremium[i].getAttribute("tipo");
                if(tipo=="Premium principal"){
                    return true
                }
            }
        }

        return false
    }


}

function filtroPremiumTv(filaCuerpo){
    let nameS = filaCuerpo.getAttribute("key")
    if(nameS.includes("Tv")==true||nameS.includes("G3")==true||nameS.includes("PackNegocios")==true&&nameS.includes("Lite")==false){
        return true
    }
    return false
}

function pesificado(valor){
    let resultado = "$"+valor
    return resultado
}

function addNav(){
    if(document.querySelectorAll(".filaCuerpo").length==1){
        if(document.querySelector("#navAdd")==undefined){
            let nav = document.createElement("nav")
            nav.setAttribute("id","navAdd")
            let ul = document.createElement("div")
            ul.setAttribute("class","nav-list")
        
            let addContainer = document.createElement("div")
            let add = document.createElement("div")
            add.setAttribute("class","icon")
            let addLogo = document.createElement("i")
            let addToolTip = document.createElement("h3")
            addToolTip.setAttribute("class","toolTip")
            addToolTip.textContent = "Agregar (A)"
            
            add.appendChild(addLogo)
            addContainer.appendChild(add)
            addContainer.appendChild(addToolTip) 
            addLogo.setAttribute("class","fa-solid fa-circle-plus")
            addLogo.setAttribute("onclick","premium()")
            
            let restContainer = document.createElement("div")
            let rest = document.createElement("div")
            rest.setAttribute("class","icon")
            let restLogo = document.createElement("i")
            let restToolTip = document.createElement("h3")
            restToolTip.setAttribute("class","toolTip")
            restToolTip.textContent = "Quitar (S)"

            rest.appendChild(restLogo)
            restContainer.appendChild(rest)
            restContainer.appendChild(restToolTip) 
            restLogo.setAttribute("class","fa-solid fa-circle-minus")
            restLogo.setAttribute("onclick","quitarFila()")

            let adicionalContainer = document.createElement("div")
            let adicional = document.createElement("div")
            adicional.setAttribute("class","icon")
            let adicionalLogo = document.createElement("i")
            let adicionalToolTip = document.createElement("h3")
            adicionalToolTip.setAttribute("class","toolTip")
            adicionalToolTip.textContent = "Costo Adicional"

            adicional.appendChild(adicionalLogo)
            adicionalContainer.appendChild(adicional)
            adicionalContainer.appendChild(adicionalToolTip) 
            adicionalLogo.setAttribute("class","fa-sharp fa-solid fa-screwdriver-wrench")
            adicionalLogo.setAttribute("onclick","costoAdicional()")
            
            
            let calContainer = document.createElement("div")
            let cal = document.createElement("div")
            cal.setAttribute("class","icon")
            let calLogo = document.createElement("i")
            let calToolTip = document.createElement("h3")
            calToolTip.setAttribute("class","toolTip")
            calToolTip.textContent = "Calcular (Enter)"

            cal.appendChild(calLogo)
            calContainer.appendChild(cal)
            calContainer.appendChild(calToolTip) 
            calLogo.setAttribute("class","fa-solid fa-calculator")
            calLogo.setAttribute("onclick","calculadora()")
        
            ul.appendChild(addContainer)
            ul.appendChild(restContainer)
            ul.appendChild(adicionalContainer)
            ul.appendChild(calContainer)
            nav.appendChild(ul)
            ul.setAttribute("class","nav-list")
            document.body.appendChild(nav)
    
        }
    }

}

function copyClipboardTable (){
    let tabla = document.querySelector("#containerTabla");
    let tablaOriginal = document.querySelector("#tabla")

    // formatStyle(tablaOriginal);
    tabla.style.textAlign = "center"
    let tablaInner = tabla.innerHTML
    let content = [tablaInner]
    let blob = new Blob (content,{type:"text/html"})
    const contentFinal = new ClipboardItem({ "text/html": blob });
    if(tabla!=undefined){
        // navigator.clipboard.writeText(tabla.innerHTML);
        navigator.clipboard.write([contentFinal]);
        alert("Se ha copiado la tabla")
    }
}

document.addEventListener("keydown",presskey)

function presskey(event){
    const teclaPrecionada = event.keyCode
    if(document.querySelector("#modal-container-permanencia").style.visibility!="visible"){
        if(teclaPrecionada==13){
            if(document.querySelector("#filaTotal")==undefined){
                calculadora();
            }
            else{
                totalPrecioLista();
            }
        }
        else if(teclaPrecionada==65){
            premium();
        }
        else if(teclaPrecionada==83){
            quitarFila();
        }
        else if(teclaPrecionada==27){
            let containerModal = document.querySelector("#modal-container")
            let containerModalListas = document.querySelector("#modal-container-listas")
            if(containerModal.style.visibility=="visible"){
                containerModal.style.visibility = "hidden"
            }
            else if(containerModalListas.style.visibility=="visible"){
                containerModalListas.style.visibility = "hidden"
            }
            else{
                deleteAll();
            }
        }
        else if(teclaPrecionada==97){
            numeroTecladoLocalidad("001");
        }
        else if(teclaPrecionada==98){
            numeroTecladoLocalidad("002");
        }
        else if(teclaPrecionada==99){
            numeroTecladoLocalidad("003");
        }
        else if(teclaPrecionada==100){
            numeroTecladoLocalidad("004");
        }
        else if(teclaPrecionada==101){
            numeroTecladoLocalidad("005");
        }
        else if(teclaPrecionada==102){
            numeroTecladoLocalidad("103");
        }
        else if(teclaPrecionada==103){
            numeroTecladoLocalidad("104");
        }
        else if(teclaPrecionada==104){
            numeroTecladoLocalidad("Santo Tomé");
        }
        else if(teclaPrecionada==105){
            numeroTecladoLocalidad("106");
        }
        else if(teclaPrecionada==81){
            numeroTecladoServicio("Internet");
        }
        else if(teclaPrecionada==87){
            numeroTecladoServicio("TV + Internet");
        }
        else if(teclaPrecionada==69){
            numeroTecladoServicio("TV + Internet + Telefonía");
        }
        else if(teclaPrecionada==49){
            numeroTecladoVelocidad(serviciosVelocidades.v1);
        }
        else if(teclaPrecionada==50){
            numeroTecladoVelocidad(serviciosVelocidades.v2);
        }
        else if(teclaPrecionada==51){
            numeroTecladoVelocidad(serviciosVelocidades.v3);
        }
        else if(teclaPrecionada==80){
            precioDeLista();
        }
        else if(teclaPrecionada==32){
            let captacion = document.querySelector("#captacion")
            let retencion = document.querySelector("#retencion")
            if(captacion.checked==true){
                retencion.checked = true
                mostrarGreen("Retención",-500)
            }
            else{
                captacion.checked = true
                mostrarGreen("Captación",-500)
            }
            deleteAll();
        }
        else if(teclaPrecionada==88){
            copyTkt();
        }
        else if(teclaPrecionada==68){
            costoAdicional();
        }
        else if(teclaPrecionada==84){
            let containerModal = document.querySelector("#modal-container")
            if(containerModal.style.visibility=="visible"){
                containerModal.style.visibility = "hidden"
            }
            else{
                tablaTeclasRapidas();
            }
        }
        else if(teclaPrecionada==77){
            tablaPermanencia();
        }
        else if(teclaPrecionada==76){
            mostrarListas();
        }

    }
    else{
        if(teclaPrecionada==27){
            document.querySelector("#modal-container-permanencia").style.visibility="hidden"
        }
        else if (teclaPrecionada==13){
            revisarPermanencia()
        }

    }
}

function numeroTecladoLocalidad(n){
    let localidadSelect = document.querySelector("#localidad")
    if(localidadSelect!=undefined){
        localidadSelect.value = n
        localidad();
    }
}

function numeroTecladoServicio(n){
    let servicioSelect = document.querySelector("#servicio")
    if(servicioSelect!=undefined){
        servicioSelect.value = n
        createSelectorVel(selectorLocalidad(true));
    }
}

function numeroTecladoVelocidad(n){
    let velSelect = document.querySelector("#velocidad")
    if(velSelect!=undefined){
        velSelect.value = n
        createTableSpliter();
    }
}

function captacionDiferida(data,fila){
    let cellPromo = document.createElement("td")
    cellPromo.setAttribute("class","celdaDoblePromo")
    let cellPrecioFinal = document.createElement("td")
    cellPrecioFinal.setAttribute("class","celdaDoblePromo")
    for(let i=0;i<data.cap.des.length;i++){
        let cellPromoN = document.createElement("span")
        cellPromoN.setAttribute("class","spanDoble")
        if(i==0){cellPromoN.setAttribute("class","spanDoble spanDoblePrimera")}
        cellPromoN.setAttribute("index",i)
        cellPromoN.textContent = descuentoCapTabla(data,i)
        cellPromo.appendChild(cellPromoN)
    }
    fila.appendChild(cellPromo)
    for(let i=0;i<data.cap.des.length;i++){
        let cellPrecioFinalN = document.createElement("span")
        cellPrecioFinalN.setAttribute("class","spanDoble")
        if(i==0){cellPrecioFinalN.setAttribute("class","spanDoble spanDoblePrimera")}
        cellPrecioFinalN.setAttribute("index",i)
        cellPrecioFinalN.textContent = pesificado(data.precioCaptacion(i))
        if(data.nameG=="negocios"){
            cellPrecioFinalN.textContent = cellPrecioFinalN.textContent + " + IVA"
        }
        cellPrecioFinal.appendChild(cellPrecioFinalN)
    }
    fila.appendChild(cellPrecioFinal)
}

function createInfo(){
    let status = document.querySelector("#captacion").checked
    let container = document.createElement("div");
    container.setAttribute("id","container-info")
    let titulo = document.createElement("h2")
    titulo.textContent = "Info"

    container.appendChild(titulo)

    let info
    // let ul = document.createElement("ul")

    // container.appendChild(ul)
    
    // for(let i=0;dataInfo.general.length>i;i++){
    //     let li = document.createElement("li")
    //     li.textContent = dataInfo.general[i]
    //     ul.appendChild(li)
    // }

    // document.body.appendChild(container)

    if(status==true){
        let infoCaptacion = `-`
        info = infoCaptacion
    }
    else{
        let infoRetenacion = `-`
        info = infoRetenacion
    }



    titulo.insertAdjacentHTML("afterend",info)
    // let blob = new Blob (content,{type:"text/html"})
    document.body.appendChild(container)
}

function createTkt(){
    let statusCaptacion = document.querySelector("#captacion").checked
    let statusRetencion = document.querySelector("#retencion").checked
    let statusUpgrade = document.querySelector("#upgrade").checked

    let container = document.createElement("div");
    container.setAttribute("id","container-tkt")
    let titulo = document.createElement("h2")
    titulo.textContent = "Tiket"

    container.appendChild(titulo)

    let info
    // let ul = document.createElement("ul")

    // container.appendChild(ul)
    
    // for(let i=0;dataInfo.general.length>i;i++){
    //     let li = document.createElement("li")
    //     li.textContent = dataInfo.general[i]
    //     ul.appendChild(li)
    // }

    // document.body.appendChild(container)

    if(statusCaptacion){
        let infoCaptacion = `Captación`
        info = infoCaptacion
    }
    else if(statusUpgrade){
        let infoUpgrade = `Upgrade`
        info = infoUpgrade
    }
    else if(statusRetencion){
        let infoRetenacion = `Retención`
        info = infoRetenacion
    }




    titulo.insertAdjacentHTML("afterend",info)
    // let blob = new Blob (content,{type:"text/html"})
    document.body.appendChild(container)
}

function eligePromo(x){
    let i = x.getAttribute("index");
    let fila = document.querySelector(".filaCuerpo");

    let cellPromo = document.createElement("td")
    cellPromo.textContent = fila.childNodes[2].childNodes[i].textContent
    let cellPrecioFinal = document.createElement("td")
    cellPrecioFinal.textContent = fila.childNodes[3].childNodes[i].textContent

    fila.childNodes[2].childNodes[i]

    fila.removeChild(fila.childNodes[3])
    fila.removeChild(fila.childNodes[2])
    fila.appendChild(cellPromo)
    fila.appendChild(cellPrecioFinal)

    calcularModificacion();

}

function totalPrecioLista(){
    if(document.querySelector("#filaTotal")!=undefined){
        let valorTotal = 0;
        let filasCuerpo = document.querySelectorAll(".filaCuerpo")
        let filasPremium = document.querySelectorAll(".filaPremium")
        let filaCostoAdicional = document.querySelectorAll(".filaCostoAdicional")


            if(document.querySelector("#filaTotalPrecioLista")==undefined){

                let filaTotalPrecioLista = document.createElement("tr");
                filaTotalPrecioLista.setAttribute("id","filaTotalPrecioLista")
                let cellTotal = document.createElement("td")
                cellTotal.setAttribute("colspan",spliterPremium(3))
                cellTotal.setAttribute("class","tFootTotal");
                let cellPrecioFinal = document.createElement("td")
                cellPrecioFinal.setAttribute("id","cellPrecioFinal")
                let tFoot = document.querySelector("#tFoot")
        
        
        
                for(let i=0;filasCuerpo.length>i;i++){
                    var valor = parseInt(filasCuerpo[i].childNodes[1].textContent.replace(/[^0-9]+/g, ""));
                    valorTotal = valorTotal+valor
                }
                for(let i=0;filasPremium.length>i;i++){
                    if((filasPremium[i].childNodes[1].textContent)==""){
                        valorTotal = valorTotal
                    }   
                    else{
                        var valor = parseInt(filasPremium[i].childNodes[1].textContent.replace(/[^0-9]+/g, ""));
                        valorTotal = valorTotal+valor
                    }
                }
                for(let i=0;filaCostoAdicional.length>i;i++){
                    if((filaCostoAdicional[i].childNodes[1].textContent)==""){
                        valorTotal = valorTotal
                    }   
                    else{
                        var valor = parseInt(filaCostoAdicional[i].childNodes[1].textContent.replace(/[^0-9]+/g, ""));
                        valorTotal = valorTotal+valor
                    }
                }
        
                cellTotal.textContent = "Total Precio de Lista (Sin descuento)"
                cellPrecioFinal.textContent = pesificado(valorTotal);
        
                filaTotalPrecioLista.appendChild(cellTotal)
                filaTotalPrecioLista.appendChild(cellPrecioFinal)
        
                tFoot.appendChild(filaTotalPrecioLista)
            }
            else{
                valorTotal=0
                for(let i=0;filasCuerpo.length>i;i++){
                    var valor = parseInt(filasCuerpo[i].childNodes[1].textContent.replace(/[^0-9]+/g, ""));
                    valorTotal = valorTotal+valor
                }
                for(let i=0;filasPremium.length>i;i++){
                    if((filasPremium[i].childNodes[1].textContent)==""){
                        valorTotal = valorTotal
                    } 
                    else{
                        var valor = parseInt(filasPremium[i].childNodes[1].textContent.replace(/[^0-9]+/g, ""));
                        valorTotal = valorTotal+valor

                    }  
                }
                for(let i=0;filaCostoAdicional.length>i;i++){
                    if((filaCostoAdicional[i].childNodes[1].textContent)==""){
                        valorTotal = valorTotal
                    }   
                    else{
                        var valor = parseInt(filaCostoAdicional[i].childNodes[1].textContent.replace(/[^0-9]+/g, ""));
                        valorTotal = valorTotal+valor
                    }
                }

                let cellPrecioFinal = document.querySelector("#cellPrecioFinal")
                cellPrecioFinal.textContent = pesificado(valorTotal);    
            }
    }
}

function fechaFacturacion(){
    let hoy = fecha.getDate()
    if(hoy<24&&hoy>20){
        mostrarRed("Revisar si está facturado el próximo mes antes de ofrecer promoción. Revisar vigencia correspondiente")
        // alert("Revisar si está facturado el próximo mes antes de ofrecer promoción. Revisar vigencia correspondiente")
    }
}

function formatStyle(tabla){
    let style = getComputedStyle(tabla)
    for (const key in style) {
        if (Object.hasOwnProperty.call(style, key)) {
            tabla.style[key] = style[key];
        }
    }
}

function copyTkt(){
let tkt
let status = document.querySelector("#captacion").checked
let a

    if(status==true){
        tkt = `<ul style="list-style-type:circle"><li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Nombre y apellido o Razón social:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">DNI o Cuit:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Condición frente al IVA (exento, responsable inscripto o consumidor final):</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Domicilio instalación:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Domicilio de Facturación <strong>(No ofrecer proactivamente):</strong></span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Servicios contratados:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Cantidad de bocas de TV: </span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Pack Plus (1 Kit s/cargo):</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Costos de Instalación:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Promoción:&nbsp;</span></span><strong><span style="color:rgb(255, 0, 0)">DEBEN informar que no es un precio fijo, que es a % de descuento y que queda sujeto a futuros aumentos !</span></strong></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Días proporcionales:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Periodo de permanencia bonificado<strong>(actualmente el periodo de permanencia para todos los clientes y localidades es de </strong></span></span><span style="color:#B22222"><span style="font-size:14px"><strong>12 meses</strong></span></span><span style="color:rgb(0, 0, 0)"><span style="font-size:14px"><strong>) </strong></span></span><span style="font-size:18px"><strong><span style="color:rgb(0, 0, 0)"><span style="font-family:sans-serif"><a href="http://giganet.gigared/?q=node/1909" target="_blank">COSTOS </a><span style="background-color:rgb(255, 255, 0)">Deberá abonar el equivalente al 100% PACK G3 </span></span></span></strong></span><span style="color:#B22222"><span style="font-size:16px"><strong>(act 1/5/2022)</strong></span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Requisitos informado:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Plazos de instalación&nbsp;informado:&nbsp; </span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Tel. Móvil: </span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Tel Alternativo:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Mail:</span></span></div>
        </li>
        <li>
        <div><span style="font-size:14px"><span style="color:rgb(0, 0, 0)">Recibir Factura Electrónica:</span></span></div>
        </li>
        <li>
        <div><span style="font-size:14px"><span style="color:rgb(0, 0, 0)">Forma de pago: </span></span></div>
        </li>
        <li>
        <div><span style="font-size:14px"><span style="color:rgb(0, 0, 0)">Tarjeta de crédito<strong>:</strong></span></span></div>
        </li>
        <li>
        <div><span style="font-size:14px"><span style="color:rgb(0, 0, 0)">Entidad (Visa/Master/Amex/Naranja): </span></span></div>
        </li>
        <li>
        <div><span style="font-size:14px"><span style="color:rgb(0, 0, 0)">Inicio:</span></span></div>
        </li>
        <li>
        <div><span style="color:rgb(0, 0, 0)"><span style="font-size:14px">Vencimiento:</span></span></div>
        </li>
        <li>
        <div><span style="font-size:14px"><span style="color:rgb(0, 0, 0)">CBU<span style="color:rgb(0, 0, 255)"><strong> </strong></span>(22DIG):&nbsp; </span></span><span style="color:rgb(0, 0, 0)"><span style="font-size:22px"><u><strong><span style="font-size:16px">(Deberá comunicarse con su banco emisor para autorizar el débito directo)</span></strong></u></span></span></div>
        </li>
        <li>
        <div><span style="font-size:16px"><strong><u><span style="color:rgb(0, 0, 0)">Tarjetas de crédito validas:</span></u></strong><strong> </strong><span style="color:rgb(0, 0, 0)">VISA/ AMERICAN/ MASTER/ TARJETA NARANJA</span></span></div>
        </li>
        </ul>`
        a = "Venta" 
    }
    else{
        tkt = `<ul><li><span style="font-size:18px"><span style="color:#000000">Motivo:</span></span></li>
        <li><span style="font-size:18px"><span style="color:#000000">Especificar el tipo de promo:&nbsp;</span><strong><span style="color:rgb(255, 0, 0)">DEBEN informar que no es un precio fijo, que es a % de descuento y que queda sujeto a futuros aumentos !</span></strong></span></li>
        <li><span style="font-size:18px"><span style="color:#000000">Vigencia a partir de:</span></span></li>
        <li><span style="font-size:18px"><span style="color:#000000">Aclarar <em>en <strong>Ticket</strong> caso de que corresponda</em>, que los packs premium y adicionales se facturan por fuera de la promocion </span></span></li>
        <li><span style="font-size:18px"><span style="color:#000000">Teléfono ( Cel o Fijo):</span></span></li>
        <li><strong><span style="color:#000000"><span style="font-size:18px">No debe haber deuda</span></span><span style="color:#FF0000"><span style="font-size:18px">, en caso de ser 1 sola factura deberá estar aclarado que se le pidió que abone para que la promoción impacte.</span></span></strong></li>
        <li><span style="color:#000000"><span style="font-size:18px">Upgrade, aclarar si aumenta velocidad y nuevo precio de lista informado.(Solo con titular)</span></span></li>
        </ul>`
        a = "Retención" 
    }

    let content = [tkt]
    let blob = new Blob (content,{type:"text/html"})
    const contentFinal = new ClipboardItem({ "text/html": blob });
    navigator.clipboard.write([contentFinal]);
    mostrarGreen("Se ha copiado Ticket de "+a,0)
}



function tablaTeclasRapidas() {
    let modalContainer = document.querySelector("#modal-container")
    let modalContent = modalContainer.querySelector(".modal-content")
    let closeBtn = modalContent.querySelector(".close")

    modalContainer.style.visibility = "visible"

    closeBtn.addEventListener("click",function(){
        modalContainer.style.visibility = "hidden"
    })

    window.addEventListener("click",function(e){
        let item = e.target
        if(modalContainer.style.visibility!="hidden"){
            if(item==modalContainer){
                modalContainer.style.visibility = "hidden"
            }

        }
    })
    
}

function tablaPermanencia() {
    let modalContainer = document.querySelector("#modal-container-permanencia")
    let modalContent = modalContainer.querySelector(".modal-content")
    let closeBtn = modalContent.querySelector(".close")
    let botonPermanencia = document.querySelector("#botonPermanencia")

    modalContainer.style.visibility = "visible"

    closeBtn.addEventListener("click",function(){
        modalContainer.style.visibility = "hidden"
    })

    window.addEventListener("click",function(e){
        let item = e.target
        if(modalContainer.style.visibility!="hidden"){
            if(item==modalContainer){
                modalContainer.style.visibility = "hidden"
            }

        }
    })

    botonPermanencia.addEventListener("click", () => {
        revisarPermanencia();
      });
}


function costoAdicional(){
    let status = document.querySelector("#captacion").checked
    let tabla = document.querySelector("#tabla")
    let filaCuerpo = document.querySelectorAll(".filaCuerpo")
    let tBody = document.querySelector("#tBody")
    let filaCostoAdicional = document.createElement("tr");
    filaCostoAdicional.setAttribute("class","filaCostoAdicional");
    

    if(filaCuerpo.length==1){
        let cellService = document.createElement("td");
        cellService.setAttribute("class","primeraCelda")
        let selectService = document.createElement("select");
        selectService.setAttribute("id","selectCostoAdicional");
        selectService.setAttribute("onchange","tablaCostoAdicional(this)");
        let def = document.createElement("option");
        def.text = "Seleccione costo adicional";
        def.setAttribute("selected","");
        def.setAttribute("disabled","");
        selectService.appendChild(def);


        cellService.appendChild(selectService);

        let cellPrecioLista = document.createElement("td");
            
        let cellPromo = document.createElement("td");
    
        let cellFinal = document.createElement("td");

        filaCostoAdicional.appendChild(cellService);
        filaCostoAdicional.appendChild(cellPrecioLista);
        filaCostoAdicional.setAttribute("class","filaCostoAdicional");

        if(status==false){
            var cellVigencia = document.createElement("td");
            cellVigencia.textContent = "-";
            filaCostoAdicional.appendChild(cellVigencia);
        }

        filaCostoAdicional.appendChild(cellPromo);
        filaCostoAdicional.appendChild(cellFinal);
        tBody.appendChild(filaCostoAdicional);

        let nFilaCostoAdicional = document.querySelectorAll(".filaCostoAdicional").length

        for ( let key in listaCostoAdicional){
            let costoAdicional = listaCostoAdicional[key]
            let a = "label_"+costoAdicional.tipo.replace(/ /g,'')+nFilaCostoAdicional
            let label = document.querySelector("#"+a)
            if(label==undefined){
                let label = document.createElement("optgroup");
                label.setAttribute("id","label_"+costoAdicional.tipo.replace(/ /g,'')+nFilaCostoAdicional);
                label.setAttribute("label",costoAdicional.tipo.toUpperCase());

                selectService.appendChild(label)
                let option = document.createElement("option")
                option.setAttribute("value",key);
                option.textContent = costoAdicional.nameS;
                label.appendChild(option);
            }
            else{
                let option = document.createElement("option")
                option.setAttribute("value",key);
                option.textContent = costoAdicional.nameS;
                label.appendChild(option);
            }
        }


    

    }
}



function tablaCostoAdicional(e){
    let status = document.getElementById("captacion").checked
    let i = spliterPremium(3)
    let value = e.value
    let celdaSelector = e.parentNode
    let filaCostoAdicional = celdaSelector.parentNode
    let celdas = filaCostoAdicional.childNodes

    let precio = listaCostoAdicional[value].precio
    
    celdas[1].textContent = "$" + precio
    celdas[2].textContent = "-";
    if(status==false){
            celdas[3].textContent = "-";
    }
    celdas[i].textContent = "$" + precio
    celdas[i].setAttribute("value",precio)
    calcularModificacion();
}

function modificaTitulo(){
    let statusCaptacion = document.querySelector("#captacion").checked
    let statusRetencion = document.querySelector("#retencion").checked
    let statusUpgrade = document.querySelector("#upgrade").checked
    let titulo = document.querySelector("#titulo")
    let tituloHeader = document.querySelector("title")
    if(statusCaptacion==true){
        titulo.textContent = "Captación"
        tituloHeader.textContent = "Captación"
    }
    else if (statusRetencion==true){
        titulo.textContent = "Retención"
        tituloHeader.textContent = "Retención"
    }
    else if (statusUpgrade==true){
        titulo.textContent = "Upgrade"
        tituloHeader.textContent = "Upgrade"
    }
}

function fechaEnIntervalo(fechaPerma, inicioIntervalo, finIntervalo, price) {
    var fechaTime = fechaPerma.getTime();
    var inicioIntervaloTime = inicioIntervalo.getTime();
    var finIntervaloTime = finIntervalo.getTime();
    let displayPermanencia = document.querySelector("#costoPermanencia")

    const hoy = new Date();
    const hoyUnAñoAtras = new Date(hoy.getFullYear() - 1, hoy.getMonth(), hoy.getDate());
    
    if(fechaTime >= inicioIntervaloTime && fechaTime <= finIntervaloTime && hoyUnAñoAtras<fechaTime){
        displayPermanencia.textContent ="$"+price
        mostrarRed("No cumple con periodo de permanencia, debe abonar: $"+price)
        displayPermanencia.style.color = "red"
        return true
    }
    else{
        if(hoyUnAñoAtras>fechaTime){
            displayPermanencia.textContent = "No debe abonar monto, superó el periodo de permanencia."
            mostrarGreen("No debe abonar monto, superó el periodo de permanencia.",2000)
            displayPermanencia.style.color ="green"
        }
        else if (fecha<fechaTime){
            displayPermanencia.textContent = "La fecha que ingresaste todavía no ocurrió"
            displayPermanencia.style.color ="black"
        }
        else if (isNaN(fechaTime)){
            displayPermanencia.textContent = "Coloque la fecha de intalación del serivicio"
            displayPermanencia.style.color ="black"
        }
    }
}



function revisarPermanencia(){
    let fechaPermanencia = document.querySelector("#fechaPermanencia")
    let fechaPer = new Date(fechaPermanencia.value);

    let intervalos = Object.keys(datosPermanencia)
    
    for (let i = 0; i < intervalos.length; i++) {
        if(fechaEnIntervalo(fechaPer,datosPermanencia[intervalos[i]]["inicio"],datosPermanencia[intervalos[i]]["fin"],datosPermanencia[intervalos[i]]["price"])==true){
            break;
        }
    }
}

function mostrarRed(text){
    let time = 3000
    let alerta = document.querySelector(".alerta-container-red")
    let msj = document.querySelector(".alerta-msj-red")
    msj.textContent = text
    alerta.style.visibility = "visible"
    setTimeout(function(){
        alerta.style.opacity = 0
        alerta.style.visibility = "hidden"
    },time)
    setTimeout(function(){
        alerta.style.opacity = 0.95;
    },time+1500)
}

function mostrarGreen(text,timeIn){
    let time = timeIn+1000
    let alerta = document.querySelector(".alerta-container-green")
    let msj = document.querySelector(".alerta-msj-green")
    msj.textContent = text
    alerta.style.visibility = "visible"
    setTimeout(function(){
        alerta.style.opacity = 0
        alerta.style.visibility = "hidden"
    },time)
    setTimeout(function(){
        alerta.style.opacity = 0.95;
    },time+1500)
}


function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text.replace(/\n/g, ' COMPLETAR        ');
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  

function copyTkt2() {
    let status = document.querySelector("#captacion").checked
    let a

    if(status==true){
        const tktToCopy = 'Nombre y apellido o Razón social:\nDNI o Cuit:\nCondición frente al IVA (exento, responsable inscripto o consumidor final):\nDomicilio instalación:\nDomicilio de Facturación (No ofrecer proactivamente):\nServicios contratados:\nCantidad de bocas de TV:\nPack Plus (1 Kit s/cargo):\nCostos de Instalación:\nPromoción:\nDEBEN informar que no es un precio fijo, que es a % de descuento y que queda sujeto a futuros aumentos !\nDías proporcionales:\nPeriodo de permanencia bonificado(actualmente el periodo de permanencia para todos los clientes y localidades es de 12 meses) COSTOS Deberá abonar el equivalente al 100% PACK G3200 (act 09/02/2023)\nRequisitos informado:\nPlazos de instalación informado: \nTel. Móvil:\nTel Alternativo:\nMail:\nRecibir Factura Electrónica:\nForma de pago:\nTarjeta de crédito:\nEntidad (Visa/Master/Amex/Naranja):\nInicio:\nVencimiento:\nCBU (22DIG): \n(Deberá comunicarse con su banco emisor para autorizar el débito directo)\nTarjetas de crédito validas: VISA/ AMERICAN/ MASTER/ TARJETA NARANJA';
        copyTextToClipboard(tktToCopy);
        a = "Venta" 
    }
    else{
        const tktToCopy = 'Motivo:\nEspecificar el tipo de promo: DEBEN informar que no es un precio fijo, que es a % de descuento y que queda sujeto a futuros aumentos !\nVigencia a partir de:\nAclarar en Ticket caso de que corresponda, que los packs premium y adicionales se facturan por fuera de la promocion\nTeléfono ( Cel o Fijo):\nNo debe haber deuda, en caso de ser 1 sola factura deberá estar aclarado que se le pidió que abone para que la promoción impacte.\nUpgrade, aclarar si aumenta velocidad y nuevo precio de lista informado.(Solo con titular)';
        copyTextToClipboard(tktToCopy);
        a = "Retención" 
    }
    mostrarGreen("Se ha copiado Ticket de "+a,0)
  };


function montoPermaneciaActual(){
    let intervalos = Object.keys(datosPermanencia)
    let ultimoIntervalorPermanencia = datosPermanencia[intervalos[intervalos.length-1]]

    
    let titlePermanencia = document.querySelector(".modal-title-permanencia")
    let ultimaPermanencia = document.createElement("p")
    ultimaPermanencia.setAttribute("class","ultimaPermanencia")
    ultimaPermanencia.textContent = "Monto por inclumplimiento de permanencia actual: $" +ultimoIntervalorPermanencia.price
    
    titlePermanencia.insertAdjacentElement('afterend', ultimaPermanencia)
}

function descuentosUpgradeDiferidos(currentService,fila,UpgradePromo){
    let cellPromo = document.createElement("td")
    cellPromo.setAttribute("class","celdaDoblePromo")
    let cellPrecioFinal = document.createElement("td")
    cellPrecioFinal.setAttribute("class","celdaDoblePromo")
    for (let i = 0; i < UpgradePromo.duration.length; i++) {
        let cellPromoN = document.createElement("span")
        cellPromoN.setAttribute("class","spanDoble")
        if(i==0){cellPromoN.setAttribute("class","spanDoble spanDoblePrimera")}
        cellPromoN.setAttribute("index",i)
        cellPromoN.textContent =UpgradePromo.duration[i] +" meses " + UpgradePromo.des + "% con " + UpgradePromo.condition[i]
        cellPromo.appendChild(cellPromoN)    
    }
    fila.appendChild(cellPromo)

    for(let i=0;i<UpgradePromo.duration.length;i++){
        let cellPrecioFinalN = document.createElement("span")
        cellPrecioFinalN.setAttribute("class","spanDoble")
        if(i==0){cellPrecioFinalN.setAttribute("class","spanDoble spanDoblePrimera")}
        cellPrecioFinalN.setAttribute("index",i)
        cellPrecioFinalN.textContent = pesificado(descuento(currentService.precioLista(),UpgradePromo.des))
        if(currentService.nameG=="negocios"){
            cellPrecioFinalN.textContent = cellPrecioFinalN.textContent + " + IVA"
        }
        cellPrecioFinal.appendChild(cellPrecioFinalN)
    }
    fila.appendChild(cellPrecioFinal)


}

function intalacionConCargo(intalacionSc){
    if(intalacionSc!=0){
        return "Costo de instalación: " + pesificado(intalacionSc)
    }
}

function mostrarListas() {
    let modalContainer = document.querySelector("#modal-container-listas")
    let modalContent = modalContainer.querySelector(".modal-content")
    let closeBtn = modalContent.querySelector(".close")

    modalContainer.style.visibility = "visible"

    closeBtn.addEventListener("click",function(){
        modalContainer.style.visibility = "hidden"
    })

    window.addEventListener("click",function(e){
        let item = e.target
        if(modalContainer.style.visibility!="hidden"){
            if(item==modalContainer){
                modalContainer.style.visibility = "hidden"
            }

        }
    })
    
}

function listaPremium(){
    deleteLista()
    const app = document.querySelector(".app-list")

    const header = document.createElement("a")
    header.className = "title-listas link-listas"
    header.textContent = "Packs Premium"
    header.href = "http://giganet/?q=node/2843"

    const premiums = Object.keys(listaLocalidades.Premium)
    const datos = listaLocalidades.Premium

    app.appendChild(header)

    const filaHeader = document.createElement("div")
    filaHeader.setAttribute("class","fila-lista-header")

    filaHeader.innerHTML = `<span>Servicio</span>
                            <div class="div-captacion-lista">
                                <span>Captación</span>
                                <span class="info-captacion-lista">(No acumulable con retención)</span>
                            </div>
                            <span>ddpp</span>
                            <span>Valor</span>
                            <span>No vender</span>
                            `

    app.appendChild(filaHeader)
    
    premiums.forEach(pack => {
        const localidades = Object.keys(premiumLocalidades)
        
        const fila = document.createElement("div")
        fila.setAttribute("class","fila-lista")

        const namePack = document.createElement("div")
        namePack.setAttribute("class","name-pack cell-list")
        namePack.innerHTML += `<a class="link-listas namePack-listas" href="${queIncluyePremiumLinkRender(pack)}">${datos[pack].nameS}</a>`

        fila.appendChild(namePack)



        const descuentoPack = document.createElement("div")
        descuentoPack.setAttribute("class","descuento-pack cell-list")
        const descuentoPackSpan = document.createElement("span")
        descuentoPackSpan.setAttribute("class","descuento-pack-span")
        
        if(datos[pack].descuento.des!=0){
            descuentoPackSpan.textContent = datos[pack].descuento.time +" meses con el " + datos[pack].descuento.des + "%"
        }
        else{
            descuentoPackSpan.textContent = "-"
        }



        const ddppPack = document.createElement("div")
        ddppPack.setAttribute("class","ddpp-pack cell-list")
        const ddppPackSpan = document.createElement("span")
        ddppPackSpan.setAttribute("class","ddpp-pack-span")

        if(datos[pack].proporcionalesSC){
            ddppPackSpan.textContent = "Sin cargo"
        }
        else{
            ddppPackSpan.textContent = "Con cargo"
            ddppPackSpan.style.color = "red"
        }

    
        
        descuentoPack.appendChild(descuentoPackSpan)
        fila.appendChild(descuentoPack)


        
        ddppPack.appendChild(ddppPackSpan)
        fila.appendChild(ddppPack)
        


        const pricePack = document.createElement("div")
        pricePack.setAttribute("class","price-pack cell-list")
        const pricePackSpan = document.createElement("span")
        pricePackSpan.setAttribute("class","price-pack-span")
        
        pricePackSpan.textContent = pesificado(datos[pack].precio)


        pricePack.appendChild(pricePackSpan)
        localidades.forEach(currentLocalidad =>{
            const descuentoPremiumLocalidad = premiumLocalidades[currentLocalidad][pack].descuentoPrecioLista
            if(descuentoPremiumLocalidad!=0){
                pricePack.innerHTML = pricePack.innerHTML + `<span class="price-pack-span-different">${separarCamelCase(currentLocalidad)}: $${descuento(datos[pack].precio,descuentoPremiumLocalidad)}</span>`
            }

        })
        
        fila.appendChild(pricePack)


        const cellNoDisponible = document.createElement("div")
        cellNoDisponible.setAttribute("class","cellNoDisponible cell-list")
        const NoDisponibleUl = document.createElement("ul")
        NoDisponibleUl.setAttribute("class","cellNoDisponible-ul")


        localidades.forEach(currentLocalidad =>{
            if(premiumLocalidades[currentLocalidad][pack].disponible===false){
                const currentLi = document.createElement("li")
                if(currentLocalidad=="SanPedro"&&pack=="TF"){
                    currentLi.textContent = separarCamelCase(currentLocalidad) +"(Solo con TV box y TF play)"

                }
                else if(currentLocalidad!="SanPedro"&&pack=="TF"){
                    currentLi.textContent = separarCamelCase(currentLocalidad) +"(Solo TF play)"
                }
                else{
                    currentLi.textContent = separarCamelCase(currentLocalidad)
                }
                NoDisponibleUl.appendChild(currentLi)
            }

        })
        cellNoDisponible.appendChild(NoDisponibleUl)
        fila.appendChild(cellNoDisponible)


        app.appendChild(fila)

    });

    const filaIntalacionStb = document.createElement("div")
    filaIntalacionStb.className = "filas-intalacion-stb"

    filaIntalacionStb.innerHTML = `  <div class="fila-instalacion-stb">
                            <a class="title-intalacion-stb link-listas" href="http://giganet.gigared/?q=node/285#COSTO%20DECODIFICADORES">Costo de intalación STB</a>
                            <ul class="ul-intalacion-stb">
                                <li>1° opción: $${listaCostoAdicional.intalacionStb.precio}</li>
                                <li>2° opción: 3 cutas de $${listaCostoAdicional.intalacionStbCuotas.precio} c/u</li>
                                <li>3° opción: Instalación de primer STB bonificada con adhesión a <strong>Débito Automático</strong></li>
                                <li>Instalación bonificada en Goya contratando pack TF</li>
                            </ul>
                        </div>
                        <div class="fila-instalacion-stb">
                            <span class="title-intalacion-stb">Costo de reconexión STB</span>
                                <ul class="ul-intalacion-stb">
                                <li>1° opción: $${listaCostoAdicional.intalacionStb.precio}</li>
                                <li>2° opción: 3 cutas de $${listaCostoAdicional.intalacionStbCuotas.precio} c/u</li>
                                <li>Se cobra solo si la desconexión y solicitud de reconexión del decodificador se produce dentro de los 6 meses</li>
                            </ul>
                        </div>`
    app.appendChild(filaIntalacionStb)

    
}
function listaCostosAdicionales(){
    deleteLista()
    const app = document.querySelector(".app-list")

    const header = document.createElement("a")
    header.className = "title-listas link-listas"
    header.textContent = "Costos Adicionales"
    header.href = "http://giganet/?q=node/285"
    app.appendChild(header)

    const costosAdicionales = Object.keys(listaCostoAdicional)
    
    const categoriaYaRenderizada = []

    costosAdicionales.forEach(item =>{
        if(!categoriaYaRenderizada.includes(listaCostoAdicional[item].tipo)){
            const costoAdicional = listaCostoAdicional[item]
            categoriaYaRenderizada.push(costoAdicional.tipo)
            app.innerHTML +=    `<div class="container-tipo container-tipo-${costoAdicional.tipo.replace(/\s/g, "")}">
                                    <div class="fila-header-tipo">
                                        <span>${costoAdicional.tipo}</span>
                                    </div>
                                </div>`


            costosAdicionales.forEach(item=>{
                const costoAdicional = listaCostoAdicional[item]
                if((costoAdicional.tipo==categoriaYaRenderizada[categoriaYaRenderizada.length-1])){
                    const container = document.querySelector(`.container-tipo-${costoAdicional.tipo.replace(/\s/g, "")}`)
                    container.innerHTML += `<div class="fila-costo-adicionl">
                                                <span class="span-costo-adicional">${costoAdicional.nameS}</span>
                                                <span class="span-costo-adicional">$${costoAdicional.precio}</span>
                                            </div>`
                }

            })


        }
        
    })    
}

function deleteLista(){
    const app = document.querySelector(".app-list")
    const select = document.querySelector("#select-listas")

    while(app.firstChild){
        app.removeChild(app.firstChild)
        select.value="Seleccione lista"

    }

}

function separarCamelCase(palabra) {
    return palabra.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function swichListas(){
    const selector = document.querySelector("#select-listas")
    if(selector.value=="premium"){
        listaPremium()
    }
    else if(selector.value=="adicionales"){
        listaCostosAdicionales()
    }
    else if(selector.value=="gigacam"){
        listaGigacam()
    }
}

function queIncluyeCaptacionLinkRender(nameS){
    if(nameS=="Tv"){
        return linksGiganet.queIncluyeCaptacion.Tv
    }
    else if(nameS=="Internet"){
        return linksGiganet.queIncluyeCaptacion.Internet
    }
    else if (nameS == "TV + Internet"){
        return linksGiganet.queIncluyeCaptacion.TvInternet
    }
    else if (nameS == "TV + Internet + Telefonía"){
        return linksGiganet.queIncluyeCaptacion.TvInternetTel
    }
    else if (nameS == "Pack Negocios"){
        return linksGiganet.queIncluyeCaptacion.PackNegocios
    }
    else{
        return undefined
    }
}
function queIncluyePremiumLinkRender(pack){
    return linksGiganet.premiums[pack]
}
function listaGigacam(){
    deleteLista()
    const app = document.querySelector(".app-list")

    const header = document.createElement("a")
    header.className = "title-listas link-listas"
    header.textContent = "Gigacam"
    header.href = "http://giganet/?q=node/3343"
    app.appendChild(header)

    app.innerHTML += `<div class="fila-lista-header-gigacam">
                        <span>Pack</span>
                        <span>Mantenimiento</span>
                        <span>Instalación</span>
                        <span>Instalación (3 Cuotas)</span>
                    </div>`
    
    const itemsGigacam = Object.keys(gigacamDatos)
    console.log(itemsGigacam)

    itemsGigacam.forEach(item =>{
    const dato = gigacamDatos[item]
    app.innerHTML += `<div class="fila-lista fila-lista-gigacam">
                        <a class="link-listas namePack-listas" href="${dato.linkGiganet}">${dato.nameS}</a>
                        <span>$${dato.mantenimiento}</span>
                        <span>$${dato.instalacion}</span>
                        <span>$${dato.cuotas} cada cuota</span>
                    </div>`
        
    })    
}



montoPermaneciaActual()




