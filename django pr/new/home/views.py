from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    context = {
        'a':'this is variable a',
    }
    return render(request, 'index.html',context)
def about(request):
    return HttpResponse('this is about')
def service(request):
    return HttpResponse('this is services')
def contact(request):
    return HttpResponse('this is contact')
