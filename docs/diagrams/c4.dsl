workspace {

    model {
        user = person "Usuário"
        site = softwareSystem "Site" {
          webapp = container "Web App" {
            components = component components
            services = component services
            pages = component pages
            apis = component apis
          }
          cms = container "CMS"
        }
        group "Aplicações externas" {
          telegram = softwareSystem "Telegram"
          discord = softwareSystem "Discord"
          slack = softwareSystem "Slack"
        }

        user -> pages "Acessa"
        pages -> services "Utiliza"
        services -> cms "Obtem dados"
        pages -> components "Utiliza"
        cms -> apis "Responde para"
        apis -> telegram "Integra com"
        apis -> discord "Integra com"
        apis -> slack "Integra com"

        prod = deploymentEnvironment "Production" {
          deploymentNode "Vercel" {
            containerInstance webapp
          }
          deploymentNode "Contentful" {
            containerInstance cms
          }
        }
    }

    views {

        systemLandscape {
            include *
            autolayout lr
        }

        systemContext site {
            include *
            autolayout lr
        }

        container site {
          include *
          autolayout lr
        }

        component webapp {
          include *
          autolayout lr
        }

        deployment * prod {
          include *
          autolayout lr
        }
    }
    
}