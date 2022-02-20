from django.http import HttpResponse

def index(request):
    line1 = '<h1 style = "text-align: center">云顶之奕</h1>'
    line2 = '<img src = "https://pic.netbian.com/uploads/allimg/220208/200740-1644322060cc71.jpg">'
    return HttpResponse(line1 + line2)
