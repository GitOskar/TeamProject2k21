
class EmailScoreResponseParser:
    def __init__(self, email_score):
        self.email_score=email_score

    def get_parsed_response(self):
        if self.email_score ==None:
            return {
                'status' : 404,
                'score'  : 'NULL',
                'profanity_count': 'NULL',
                'colloquialism_count' : 'NULL'
            }
        else:
            return {
                'status' : 200,
                'score' : self.email_score['score'],
                'profanity_count': self.email_score['profanity_count'],
                'colloquialism_count' : self.email_score['colloquialism_count']
            }