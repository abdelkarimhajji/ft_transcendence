# Generated by Django 5.1.4 on 2024-12-28 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0008_alter_customuser_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='photo',
            field=models.ImageField(blank=True, default='https://cdn-images-3.listennotes.com/podcasts/two-dead-pines/lsd-trip-report-Qe0E3pjyGlg-USIahZq6KYe.1400x1400.jpg', null=True, upload_to='profile_pics/'),
        ),
    ]
