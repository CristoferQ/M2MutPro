from modules.services import sdm_service

class handler_services(object):
    def sdm_service(self, pathResponse):
        self.pathResponse = pathResponse
        preparing_services = sdm_service.sdm_service(self.pathResponse)
        preparing_services.sdm()
        