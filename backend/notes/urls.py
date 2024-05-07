from django.urls import path
from .views import NoteListCreateView, NoteDeleteView,NoteUpdateView


urlpatterns = [
    path("notes/", NoteListCreateView.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", NoteDeleteView.as_view(), name="note-delete"),
    path("notes/update/<int:pk>/", NoteUpdateView.as_view(), name="note-update"),
]
