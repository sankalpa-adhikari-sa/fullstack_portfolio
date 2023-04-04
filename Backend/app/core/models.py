from django.conf import settings
from django.db import models
from django.contrib import admin
from ckeditor.fields import RichTextField
import uuid
import os

PROJECT_TYPE= [
    ("DATA SCIENCE","DATA SCIENCE"),
    ("DATA ANALYTICS","DATA ANLYTICS"),
    ("AGRICULTURAL ENGINEERNG","AGRICULTURAL ENGINEERING"),
    ("OTHERS","OTHERS")
]
PROJECT_STATUS= [
    ("COMPLETED","COMPLETED"),
    ("ON GOING","ON GOING"),
    ("PENDING","PENDING"),
]
def project_image_file_path(instance, filename):
    """Generate file path for new project image"""
    ext= os.path.splitext(filename)[1]
    filename= f'{uuid.uuid4()}{ext}'

    return os.path.join('uploads','project', filename)
def profile_image_file_path(instance, filename):
    """Generate file path for new project image"""
    ext= os.path.splitext(filename)[1]
    filename= f'{uuid.uuid4()}{ext}'

    return os.path.join('uploads','profile', filename)
def blog_image_file_path(instance, filename):
    """Generate file path for new project image"""
    ext= os.path.splitext(filename)[1]
    filename= f'{uuid.uuid4()}{ext}'

    return os.path.join('uploads','blog', filename)


class Profile(models.Model):
    name= models.CharField(max_length=200, blank=True, null=True)
    position= models.CharField(max_length=200, blank=True, null=True)
    company= models.CharField(max_length=200, blank=True, null=True)
    email= models.EmailField(max_length=500, blank=True, null=True)
    short_intro= models.CharField(max_length=200, blank=True, null=True)
    profile_image= models.ImageField(null=True, blank=True, upload_to=profile_image_file_path,default="/uploads/profile/default_profileimage.jpg")
    created=  models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return str(self.name)



class Projects(models.Model):
    """Projects Model."""
    title= models.CharField(max_length=200)
    caption= models.TextField(null=True, blank=True)
    type=models.CharField(max_length=200, choices=PROJECT_TYPE,null=True, blank=True)
    thumbnail= models.ImageField(null=True,blank=True,default='/uploads/project/default_thumbnail.jpg', upload_to=project_image_file_path)
    tags= models.ManyToManyField('Tag')
    description= models.TextField(null=True, blank=True)
    created= models.DateTimeField(auto_now_add= True)
    status=models.CharField(max_length=200, choices=PROJECT_STATUS , null=True, blank=True)
    demo_link= models.CharField(max_length=2000, null=True,blank=True)
    github_link= models.CharField(max_length=2000, null=True,blank=True)
    kaggle_link= models.CharField(max_length=2000, null=True,blank=True)
    other_source_link= models.CharField(max_length=2000, null=True,blank=True)
    project_date = models.DateField(null=True, blank=True)
    body= RichTextField(blank=True,null=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering= ['-project_date']

class Blog(models.Model):
    """Projects Model."""
    title= models.CharField(max_length=200)
    caption= models.TextField(null=True, blank=True)
    type=models.CharField(max_length=200, choices=PROJECT_TYPE,null=True, blank=True)
    thumbnail= models.ImageField(null=True,blank=True,default='/uploads/blog/default_thumbnail.jpg', upload_to=blog_image_file_path)
    tags= models.ManyToManyField('Tag')
    description= models.TextField(null=True, blank=True)
    created= models.DateTimeField(auto_now_add= True)
    status=models.CharField(max_length=200, choices=PROJECT_STATUS , null=True, blank=True)
    demo_link= models.CharField(max_length=2000, null=True,blank=True)
    github_link= models.CharField(max_length=2000, null=True,blank=True)
    kaggle_link= models.CharField(max_length=2000, null=True,blank=True)
    other_source_link= models.CharField(max_length=2000, null=True,blank=True)
    blog_date = models.DateField(null=True, blank=True)
    body= RichTextField(blank=True,null=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering= ['-blog_date']


class Tag(models.Model):
    """Tag for projects"""
    name= models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Education(models.Model):
    """Education for info"""
    title= models.CharField(max_length=200)
    period= models.CharField(max_length=200)
    college= models.CharField(max_length=200)
    created=  models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.title

class Experience(models.Model):
    """Experience for info"""
    title= models.CharField(max_length=200)
    period= models.CharField(max_length=200)
    company= models.CharField(max_length=200)
    created=  models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.title

class Certificate(models.Model):
    """Certificate for info"""
    title= models.CharField(max_length=200)
    period= models.CharField(max_length=200)
    platform= models.CharField(max_length=200)
    created=  models.DateTimeField(auto_now_add= True)
    link= models.CharField(max_length=2000, null=True,blank=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    """Skill for info"""
    skillname = models.CharField(max_length=200)
    body=models.TextField(blank=True, null=True)
    type=models.CharField(max_length=200, choices=PROJECT_TYPE,null=True, blank=True)
    created=  models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.skillname

class SocialLink(models.Model):
    """SocialLink for info"""
    linkedin= models.CharField(max_length=2000, null=True,blank=True)
    github= models.CharField(max_length=2000, null=True,blank=True)
    kaggle= models.CharField(max_length=2000, null=True,blank=True)
    facebook= models.CharField(max_length=2000, null=True,blank=True)
    instagram= models.CharField(max_length=2000, null=True,blank=True)
    youtube= models.CharField(max_length=2000, null=True,blank=True)
    website= models.CharField(max_length=2000, null=True,blank=True)

    created=  models.DateTimeField(auto_now_add= True)


class Message(models.Model):
    firstname= models.CharField(max_length=200, null=True, blank=True)
    lastname= models.CharField(max_length=200, null=True, blank=True)
    email= models.EmailField(max_length=200)
    Message= models.TextField()
    phone= models.IntegerField(null=True, blank=True)
    interests=models.CharField(max_length=200, choices=PROJECT_TYPE , null=True, blank=True)
    is_read= models.BooleanField(default=False,  null=True, blank=True)
    created=  models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.email

    class Meta:
        ordering= ['is_read','-created']

