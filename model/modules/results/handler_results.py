from modules.results import results

class handler_results(object):
    
    def exec_results(self, pathResponse):
        self.pathResponse = pathResponse
        preparing_results = results.results(self.pathResponse)
        preparing_results.responseGraph()
        preparing_results.responseStatistics()
        preparing_results.json()
        