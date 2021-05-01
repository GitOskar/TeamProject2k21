import string
class PreProcessor:
    polish_to_asci={
        'ą' : 'a',
        'ć' : 'c',
        'ł' : 'l',
        'ń' : 'n',
        'ę' : 'e',
        'ó' : 'o',
        'ś' : 's',
        'ż' : 'z',
        'ź' : 'z'
    }

    def to_asci(text):
        new_text=''
        for letter in text:
            tmp=letter
            if PreProcessor.polish_to_asci.get(tmp) != None:
                tmp=PreProcessor.polish_to_asci.get(tmp)
            new_text+=tmp
        return new_text

    def pre_process(text):
        text=PreProcessor.to_asci(text)
        text=PreProcessor.remove_punctuation(text)
        text=PreProcessor.lowercase(text)
        return text

    def remove_punctuation(text):
        new_text=''
        for letter in text:
            tmp=letter
            if not tmp in string.punctuation:
                new_text+=tmp
        return new_text

    def lowercase(text):
        return text.lower()