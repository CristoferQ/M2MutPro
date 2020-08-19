from modules.services import sdm_service

class handler_services(object):
    def exec_services(self, pathResponse):
        self.pathResponse = pathResponse
        preparing_sdm_services = sdm_service.sdm_service(self.pathResponse)
        #preparing_sdm_services.sdm()
        #preparing_sdm_services.extract()
        #preparing_sdm_services.delete()
        #preparing_sdm_services.format()