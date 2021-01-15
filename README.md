## FediRenderer - A much needed Mastodon tool 

![](https://i.postimg.cc/bwYSG3xD/Fedi-Viewer-Banner-640x360p.jpg)

-----
### Long wished for, a way to view user data Backups

'**FediRenderer**' -- a project for a much needed new tool for *viewing User Backup Exports from Mastodon instances in the Fediverse*.

-----
### We have a first working version, but what is it ?

The basic idea is [*to be able to use the Backup Data Archive*](https://write.tedomum.net/rgx/mastodon-options-for-moving-an-account), which Mastodon instances offer to all users. 

And which, until now, *we had no way to access or use much at all*. 

-----
### Backgrounder 

This is regarding the User Data backup files that mastodon can create. *And which are mostly useless*, since we didn't have ANY software so far capable of accessing and making useful to a user.

![](https://i.postimg.cc/7LtzHTb2/Masto-Backup-Export-636x127p.png)

Eugen R. covered the project's legal obligation, by providing a copy of the user data *as required by the European GDPR regulations*. 

------
### FediRenderer Toot display from a backup archive

A couple of perfectly presented Toots, as viewed by FediRenderer - both have all the links live, a time stamp linked to the original instance's Toot URL, and a media attachment displayed.

   * The sleeping cat. <br>
   [Original post](https://koyu.space/@yann2/104433987653031736)
      [![](https://i.postimg.cc/cLcjh4tk/Sleeping-Cat-Toot-600x422p.jpg)](https://koyu.space/@yann2/104433987653031736)
      
   *  Two ladies in bed. <br>
   [Original post](https://koyu.space/@yann2/104435903721994898) 
      [![](https://i.postimg.cc/zBycqCt4/Ladies-Bed-Toot-600x389p.jpg)](https://koyu.space/@yann2/104435903721994898)
      
This is a much needed and until now non-existent viewer utility for the Mastodon user data export files. I have dreamed about one, and never found it.

A young software engineer friend already sent me *a first test version* -- a working **Fediverse Backup Archive Viewer**.

This friend is not a Fediverse user, and the protocols and data formats were all new to him.

------
### Original developer email brings a working version

And instructions on how to install and use it. 

> Hey R., I'm glad you found it useful. I fixed a couple bugs, here's the source if you want to play with it and add more features.
>
> To run it you need **node.js** installed, and from the command line run `npm install` once inside that directory to install the library dependencies.
>
> Then `node run.js <yourExportedDirectory>` 
>
>...where `<yourExportedDirectory>` is the path to your unzipped backup directory containing outbox.json.
> 
> Let me know if there are any issues with running it! I haven't tested it on Windows.

Detailed [installation instructions for Windows users can be found on my Blog post](https://write.tedomum.net/rgx/fedirenderer-a-much-needed-mastodon-tool/) for this. 


