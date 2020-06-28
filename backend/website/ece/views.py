from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics

class FacultyList(generics.ListCreateAPIView):
	queryset=Faculty.objects.all()
	serializer_class=FacultySerializers

class FacultyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializers

class NoticeList(generics.ListCreateAPIView):
	queryset=Notice.objects.all()
	serializer_class=NoticeSerializers

class NoticeDetail(generics.ListCreateAPIView):
	queryset=Notice.objects.all()
	serializer_class=NoticeSerializers


