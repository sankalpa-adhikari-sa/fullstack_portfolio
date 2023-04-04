"""views for Infos APIs"""

from django.shortcuts import render
from rest_framework import viewsets,mixins
from core.models import Education,Experience,Certificate,Message,Skill,SocialLink,Profile
from info import serializers
from rest_framework import permissions


class ProfileViewSet(mixins.UpdateModelMixin,
                       mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    """Manage Education in database"""
    serializer_class= serializers.ProfileSerializer
    queryset= Profile.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return self.queryset.order_by('-created')
class EducationViewSet(mixins.UpdateModelMixin,
                       mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    """Manage Education in database"""
    serializer_class= serializers.EducationSerializer
    queryset= Education.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return self.queryset.order_by('-created')

class ExperienceViewSet(mixins.UpdateModelMixin,
                    mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    """Manage Experience in database"""
    serializer_class= serializers.ExperienceSerializer
    queryset= Experience.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_queryset(self):
        return self.queryset.order_by('-created')

class SkillViewSet(mixins.UpdateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    """Manage Skill in database"""
    serializer_class= serializers.SkillSerializer
    queryset= Skill.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return self.queryset.order_by('-created')

class CertificateViewSet(mixins.UpdateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    """Manage Certificate in database"""
    serializer_class= serializers.CertificateSerializer
    queryset= Certificate.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return self.queryset.order_by('-created')

class SocialLinkViewSet(mixins.UpdateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    """Manage Social links in database"""
    serializer_class= serializers.SocialLinkSerializer
    queryset= SocialLink.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return self.queryset.order_by('-created')

class MessageViewSet(mixins.DestroyModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    """Manage Message in database."""
    serializer_class= serializers.MessageSerializer
    queryset= Message.objects.all()


    def get_queryset(self):
        return self.queryset.order_by('-created')



